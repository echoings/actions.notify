"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const axios_1 = __importDefault(require("axios"));
const crypto_js_1 = __importDefault(require("crypto-js"));
const form_data_1 = __importDefault(require("form-data"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const notify_1 = __importDefault(require("./notify"));
class Lark extends notify_1.default {
    constructor(webhook, githubCtx, inputs) {
        super(webhook, githubCtx, inputs);
        this.timestamp = new Date().getTime().toString();
        this.signKey = inputs.signKey;
    }
    async uploadLocalFile(url) {
        const { LARK_APP_ID = '', LARK_APP_SECRECT = '' } = process.env;
        if (!(LARK_APP_ID && LARK_APP_SECRECT)) {
            core.setFailed(`Action failed with error missing onf of [LARK_APP_ID, LARK_APP_SECRECT]`);
            return '';
        }
        const tenant_access_token = await this.getAccessToken(LARK_APP_ID, LARK_APP_SECRECT);
        if (!tenant_access_token)
            return '';
        const form_data = new form_data_1.default();
        form_data.append('image', fs_extra_1.default.createReadStream(url));
        form_data.append('image_type', 'message');
        const headers = Object.assign({}, form_data.getHeaders());
        const request_config = {
            url: 'https://open.feishu.cn/open-apis/image/v4/put/',
            method: 'POST',
            headers: Object.assign({ Authorization: `Bearer ${tenant_access_token}` }, headers),
            data: form_data,
        };
        const uploadRes = await axios_1.default.request(request_config);
        if (uploadRes.status === 200 && uploadRes.data && uploadRes.data.code === 0) {
            return uploadRes.data.data.image_key;
        }
        core.setFailed(`upload faild`);
        return '';
    }
    async getAccessToken(LARK_APP_ID, LARK_APP_SECRECT) {
        const res = await axios_1.default.request({
            url: 'https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal/',
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            data: {
                app_id: LARK_APP_ID,
                app_secret: LARK_APP_SECRECT,
            },
        });
        let tenant_access_token = '';
        if (res.status === 200 && res.data && res.data.code === 0) {
            tenant_access_token = res.data.tenant_access_token;
        }
        if (!tenant_access_token) {
            core.setFailed('get tenant_access_token error, please check');
            return '';
        }
        return tenant_access_token;
    }
    async notify() {
        const enableImage = core.getInput('enable_image');
        const imageInfo = {};
        enableImage.split('\n').forEach(v => {
            const map = v.split('=');
            if (map[1]) {
                imageInfo[map[0]] = map[1];
            }
            else {
                imageInfo[map[0]] = true;
            }
        });
        let image_key = '';
        const { url, title } = imageInfo;
        console.info('uuuuuuu: ', url, title, imageInfo);
        if (imageInfo['enable'] === 'true' && url) {
            console.info('weeee');
            image_key = await this.uploadLocalFile(url);
        }
        this.timestamp = new Date().getTime().toString();
        if (this.signKey) {
            this.signature = this.genSin(this.signKey, this.timestamp);
        }
        const { ctxFormatContent, signature: sign, inputs } = this;
        const requestPayload = {
            timestamp: this.timestamp,
            sign,
            msg_type: 'interactive',
            card: {
                config: {
                    wide_screen_mode: true,
                    enable_forward: true,
                },
                header: {
                    title: {
                        content: `${inputs.notifyTitle}`,
                        tag: 'plain_text',
                    },
                    template: 'red',
                },
                elements: [
                    {
                        tag: 'div',
                        text: {
                            content: `**Author** ${ctxFormatContent.actor}`,
                            tag: 'lark_md',
                        },
                    },
                    {
                        tag: 'div',
                        text: {
                            content: `**Ref** ${ctxFormatContent.ref}  **Event** ${ctxFormatContent.eventName}`,
                            tag: 'lark_md',
                        },
                    },
                    {
                        tag: 'div',
                        text: {
                            content: `**Message**，\n ${inputs.notifyMessage || ctxFormatContent.commitsContent}`,
                            tag: 'lark_md',
                        },
                    },
                    {
                        actions: [
                            {
                                tag: 'button',
                                text: {
                                    content: 'More Information :玫瑰:',
                                    tag: 'lark_md',
                                },
                                url: `${ctxFormatContent.actionUrl}`,
                                type: 'default',
                                value: {},
                            },
                        ],
                        tag: 'action',
                    },
                ],
            },
        };
        if (image_key) {
            const temp = {
                tag: 'img',
                title: {
                    tag: 'lark_md',
                    content: `**${title || '预览二维码'}**`,
                },
                mode: 'crop_center',
                img_key: `${image_key}`,
                alt: {
                    tag: 'plain_text',
                    content: `**${title || '预览二维码'}**`,
                },
            };
            requestPayload.card.elements.splice(2, 0, temp);
        }
        console.info(requestPayload, image_key);
        const res = await axios_1.default({
            method: 'post',
            url: this.webhook,
            data: requestPayload,
        });
        return {
            code: res.code || res.data.StatusCode,
            data: res.data,
            msg: res.msg,
        };
    }
    genSin(signKey = this.signKey, timestamp) {
        const crytoStr = `${timestamp}\n${signKey}`;
        const signature = crypto_js_1.default.enc.Base64.stringify(crypto_js_1.default.HmacSHA256('', crytoStr));
        return signature;
    }
}
exports.default = Lark;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFyay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wbGF0L2xhcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQXNDO0FBQ3RDLGtEQUEwQjtBQUMxQiwwREFBaUM7QUFDakMsMERBQWlDO0FBQ2pDLHdEQUEwQjtBQUUxQixzREFBZ0Q7QUFFaEQsTUFBcUIsSUFBSyxTQUFRLGdCQUFNO0lBSXRDLFlBQVksT0FBZSxFQUFFLFNBQWtCLEVBQUUsTUFBVztRQUMxRCxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUZwQyxjQUFTLEdBQVcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUdsRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDaEMsQ0FBQztJQUVELEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBVztRQUMvQixNQUFNLEVBQUUsV0FBVyxHQUFHLEVBQUUsRUFBRSxnQkFBZ0IsR0FBRyxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBRWhFLElBQUksQ0FBQyxDQUFDLFdBQVcsSUFBSSxnQkFBZ0IsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMseUVBQXlFLENBQUMsQ0FBQztZQUUxRixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFFckYsSUFBSSxDQUFDLG1CQUFtQjtZQUFFLE9BQU8sRUFBRSxDQUFDO1FBRXBDLE1BQU0sU0FBUyxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1FBQ2pDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLGtCQUFFLENBQUMsZ0JBQWdCLENBQUMsR0FB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