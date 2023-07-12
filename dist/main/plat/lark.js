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
function getTime() {
    return (Date.parse(new Date().toString()) / 1000).toString();
}
class Lark extends notify_1.default {
    constructor(webhook, githubCtx, inputs) {
        super(webhook, githubCtx, inputs);
        this.timestamp = getTime();
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
            url: 'https://open.feishu.cn/open-apis/im/v1/images',
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
        enableImage
            .replace(/\n/, '')
            .split(' ')
            .forEach(v => {
            const map = v.split('=');
            if (map[1]) {
                imageInfo[map[0]] = map[1];
            }
            else {
                imageInfo[map[0]] = true;
            }
        });
        let image_key = '';
        const { url = '', title: imageTitle = '预览二维码' } = imageInfo;
        const existsPic = await fs_extra_1.default.pathExists(url);
        if (imageInfo['enable'] === 'true' && existsPic) {
            image_key = await this.uploadLocalFile(url);
        }
        this.timestamp = getTime();
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
                    content: `**${imageTitle}**`,
                },
                mode: 'crop_center',
                img_key: `${image_key}`,
                alt: {
                    tag: 'plain_text',
                    content: `${imageTitle}`,
                },
            };
            requestPayload.card.elements.splice(2, 0, temp);
        }
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
    async notifyFailure() {
        const { ctxFormatContent, signature: sign, inputs } = this;
        const { JOB_FAILURE_STATUS_PIC } = process.env;
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
                        tag: 'img',
                        title: {
                            tag: 'lark_md',
                            content: '**部署故障，请排查**',
                        },
                        mode: 'crop_center',
                        img_key: `${JOB_FAILURE_STATUS_PIC}`,
                        alt: {
                            tag: 'plain_text',
                            content: '部署故障，请排查',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFyay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wbGF0L2xhcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQXNDO0FBQ3RDLGtEQUEwQjtBQUMxQiwwREFBaUM7QUFDakMsMERBQWlDO0FBQ2pDLHdEQUEwQjtBQUUxQixzREFBZ0Q7QUFFaEQsU0FBUyxPQUFPO0lBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO0FBQzVELENBQUM7QUFFRCxNQUFxQixJQUFLLFNBQVEsZ0JBQU07SUFJdEMsWUFBWSxPQUFlLEVBQUUsU0FBa0IsRUFBRSxNQUFXO1FBQzFELEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRnBDLGNBQVMsR0FBVyxPQUFPLEVBQUUsQ0FBQTtRQUczQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDaEMsQ0FBQztJQUVELEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBVztRQUMvQixNQUFNLEVBQUUsV0FBVyxHQUFHLEVBQUUsRUFBRSxnQkFBZ0IsR0FBRyxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBRWhFLElBQUksQ0FBQyxDQUFDLFdBQVcsSUFBSSxnQkFBZ0IsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMseUVBQXlFLENBQUMsQ0FBQztZQUUxRixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFFckYsSUFBSSxDQUFDLG1CQUFtQjtZQUFFLE9BQU8sRUFBRSxDQUFDO1FBRXBDLE1BQU0sU0FBUyxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1FBQ2pDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLGtCQUFFLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwRCxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUUxQyxNQUFNLE9BQU8scUJBQ1IsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUMxQixDQUFDO1FBRUYsTUFBTSxjQUFjLEdBQVE7WUFDMUIsR0FBRyxFQUFFLCtDQUErQztZQUNwRCxNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sa0JBQ0wsYUFBYSxFQUFFLFVBQVUsbUJBQW1CLEVBQUUsSUFDM0MsT0FBTyxDQUNYO1lBQ0QsSUFBSSxFQUFFLFNBQVM7U0FDaEIsQ0FBQztRQUVGLE1BQU0sU0FBUyxHQUFHLE1BQU0sZUFBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUV0RCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO1lBQzNFLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3RDO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUUvQixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQW1CLEVBQUUsZ0JBQXdCO1FBQ2hFLE1BQU0sR0FBRyxHQUFHLE1BQU0sZUFBSyxDQUFDLE9BQU8sQ0FBQztZQUM5QixHQUFHLEVBQUUsd0VBQXdFO1lBQzdFLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkM7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLFdBQVc7Z0JBQ25CLFVBQVUsRUFBRSxnQkFBZ0I7YUFDN0I7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztRQUU3QixJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO1lBQ3pELG1CQUFtQixHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7U0FDcEQ7UUFFRCxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1lBQzlELE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFFRCxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFRCxLQUFLLENBQUMsTUFBTTtRQUNWLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbEQsTUFBTSxTQUFTLEdBQVEsRUFBRSxDQUFDO1FBQzFCLFdBQVc7YUFDUixPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQzthQUNqQixLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1YsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ1gsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDVixTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzVCO2lCQUFNO2dCQUNMLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7YUFDMUI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVMLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQixNQUFNLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxHQUFHLE9BQU8sRUFBRSxHQUFHLFNBQVMsQ0FBQztRQUU1RCxNQUFNLFNBQVMsR0FBRyxNQUFNLGtCQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLE1BQU0sSUFBSSxTQUFTLEVBQUU7WUFDL0MsU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QztRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxFQUFFLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1RDtRQUVELE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztRQUUzRCxNQUFNLGNBQWMsR0FBRztZQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsSUFBSTtZQUNKLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUU7b0JBQ04sZ0JBQWdCLEVBQUUsSUFBSTtvQkFDdEIsY0FBYyxFQUFFLElBQUk7aUJBQ3JCO2dCQUNELE1BQU0sRUFBRTtvQkFDTixLQUFLLEVBQUU7d0JBQ0wsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRTt3QkFDaEMsR0FBRyxFQUFFLFlBQVk7cUJBQ2xCO29CQUNELFFBQVEsRUFBRSxLQUFLO2lCQUNoQjtnQkFDRCxRQUFRLEVBQUU7b0JBQ1I7d0JBQ0UsR0FBRyxFQUFFLEtBQUs7d0JBQ1YsSUFBSSxFQUFFOzRCQUNKLE9BQU8sRUFBRSxjQUFjLGdCQUFnQixDQUFDLEtBQUssRUFBRTs0QkFDL0MsR0FBRyxFQUFFLFNBQVM7eUJBQ2Y7cUJBQ0Y7b0JBQ0Q7d0JBQ0UsR0FBRyxFQUFFLEtBQUs7d0JBQ1YsSUFBSSxFQUFFOzRCQUNKLE9BQU8sRUFBRSxXQUFXLGdCQUFnQixDQUFDLEdBQUcsZUFBZSxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU7NEJBQ25GLEdBQUcsRUFBRSxTQUFTO3lCQUNmO3FCQUNGO29CQUNEO3dCQUNFLEdBQUcsRUFBRSxLQUFLO3dCQUNWLElBQUksRUFBRTs0QkFDSixPQUFPLEVBQUUsa0JBQWtCLE1BQU0sQ0FBQyxhQUFhLElBQUksZ0JBQWdCLENBQUMsY0FBYyxFQUFFOzRCQUNwRixHQUFHLEVBQUUsU0FBUzt5QkFDZjtxQkFDRjtvQkFDRDt3QkFDRSxPQUFPLEVBQUU7NEJBQ1A7Z0NBQ0UsR0FBRyxFQUFFLFFBQVE7Z0NBQ2IsSUFBSSxFQUFFO29DQUNKLE9BQU8sRUFBRSx1QkFBdUI7b0NBQ2hDLEdBQUcsRUFBRSxTQUFTO2lDQUNmO2dDQUNELEdBQUcsRUFBRSxHQUFHLGdCQUFnQixDQUFDLFNBQVMsRUFBRTtnQ0FDcEMsSUFBSSxFQUFFLFNBQVM7Z0NBQ2YsS0FBSyxFQUFFLEVBQUU7NkJBQ1Y7eUJBQ0Y7d0JBQ0QsR0FBRyxFQUFFLFFBQVE7cUJBQ2Q7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7UUFFRixJQUFJLFNBQVMsRUFBRTtZQUNiLE1BQU0sSUFBSSxHQUFRO2dCQUNoQixHQUFHLEVBQUUsS0FBSztnQkFDVixLQUFLLEVBQUU7b0JBQ0wsR0FBRyxFQUFFLFNBQVM7b0JBQ2QsT0FBTyxFQUFFLEtBQUssVUFBVSxJQUFJO2lCQUM3QjtnQkFDRCxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsT0FBTyxFQUFFLEdBQUcsU0FBUyxFQUFFO2dCQUN2QixHQUFHLEVBQUU7b0JBQ0gsR0FBRyxFQUFFLFlBQVk7b0JBQ2pCLE9BQU8sRUFBRSxHQUFHLFVBQVUsRUFBRTtpQkFDekI7YUFDRixDQUFDO1lBQ0YsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDakQ7UUFFRCxNQUFNLEdBQUcsR0FBUSxNQUFNLGVBQUssQ0FBQztZQUMzQixNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTztZQUNqQixJQUFJLEVBQUUsY0FBYztTQUNyQixDQUFDLENBQUM7UUFFSCxPQUFPO1lBQ0wsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQ3JDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtZQUNkLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRztTQUNiLENBQUM7SUFDSixDQUFDO0lBRUQsS0FBSyxDQUFDLGFBQWE7UUFDakIsTUFBTSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzNELE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFFL0MsTUFBTSxjQUFjLEdBQUc7WUFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLElBQUk7WUFDSixRQUFRLEVBQUUsYUFBYTtZQUN2QixJQUFJLEVBQUU7Z0JBQ0osTUFBTSxFQUFFO29CQUNOLGdCQUFnQixFQUFFLElBQUk7b0JBQ3RCLGNBQWMsRUFBRSxJQUFJO2lCQUNyQjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sS0FBSyxFQUFFO3dCQUNMLE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQyxXQUFXLEVBQUU7d0JBQ2hDLEdBQUcsRUFBRSxZQUFZO3FCQUNsQjtvQkFDRCxRQUFRLEVBQUUsS0FBSztpQkFDaEI7Z0JBQ0QsUUFBUSxFQUFFO29CQUNSO3dCQUNFLEdBQUcsRUFBRSxLQUFLO3dCQUNWLElBQUksRUFBRTs0QkFDSixPQUFPLEVBQUUsY0FBYyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7NEJBQy9DLEdBQUcsRUFBRSxTQUFTO3lCQUNmO3FCQUNGO29CQUNEO3dCQUNFLEdBQUcsRUFBRSxLQUFLO3dCQUNWLElBQUksRUFBRTs0QkFDSixPQUFPLEVBQUUsV0FBVyxnQkFBZ0IsQ0FBQyxHQUFHLGVBQWUsZ0JBQWdCLENBQUMsU0FBUyxFQUFFOzRCQUNuRixHQUFHLEVBQUUsU0FBUzt5QkFDZjtxQkFDRjtvQkFDRDt3QkFDRSxHQUFHLEVBQUUsS0FBSzt3QkFDVixLQUFLLEVBQUU7NEJBQ0wsR0FBRyxFQUFFLFNBQVM7NEJBQ2QsT0FBTyxFQUFFLGNBQWM7eUJBQ3hCO3dCQUNELElBQUksRUFBRSxhQUFhO3dCQUNuQixPQUFPLEVBQUUsR0FBRyxzQkFBc0IsRUFBRTt3QkFDcEMsR0FBRyxFQUFFOzRCQUNILEdBQUcsRUFBRSxZQUFZOzRCQUNqQixPQUFPLEVBQUUsVUFBVTt5QkFDcEI7cUJBQ0Y7b0JBQ0Q7d0JBQ0UsR0FBRyxFQUFFLEtBQUs7d0JBQ1YsSUFBSSxFQUFFOzRCQUNKLE9BQU8sRUFBRSxrQkFBa0IsTUFBTSxDQUFDLGFBQWEsSUFBSSxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUU7NEJBQ3BGLEdBQUcsRUFBRSxTQUFTO3lCQUNmO3FCQUNGO29CQUNEO3dCQUNFLE9BQU8sRUFBRTs0QkFDUDtnQ0FDRSxHQUFHLEVBQUUsUUFBUTtnQ0FDYixJQUFJLEVBQUU7b0NBQ0osT0FBTyxFQUFFLHVCQUF1QjtvQ0FDaEMsR0FBRyxFQUFFLFNBQVM7aUNBQ2Y7Z0NBQ0QsR0FBRyxFQUFFLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxFQUFFO2dDQUNwQyxJQUFJLEVBQUUsU0FBUztnQ0FDZixLQUFLLEVBQUUsRUFBRTs2QkFDVjt5QkFDRjt3QkFDRCxHQUFHLEVBQUUsUUFBUTtxQkFDZDtpQkFDRjthQUNGO1NBQ0YsQ0FBQztRQUVGLE1BQU0sR0FBRyxHQUFRLE1BQU0sZUFBSyxDQUFDO1lBQzNCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ2pCLElBQUksRUFBRSxjQUFjO1NBQ3JCLENBQUMsQ0FBQztRQUVILE9BQU87WUFDTCxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDckMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO1lBQ2QsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHO1NBQ2IsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBOEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFpQjtRQUNsRSxNQUFNLFFBQVEsR0FBRyxHQUFHLFNBQVMsS0FBSyxPQUFPLEVBQUUsQ0FBQztRQUM1QyxNQUFNLFNBQVMsR0FBRyxtQkFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLG1CQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRW5GLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQS9SRCx1QkErUkMifQ==