import * as core from '@actions/core';
import axios from 'axios';
import CryptoJs from 'crypto-js';
import FormData from 'form-data';
import fs from 'fs-extra';
import Notify from './notify';
function getTime() {
    return (Date.parse(new Date().toString()) / 1000).toString();
}
export default class Lark extends Notify {
    constructor(webhook, githubCtx, inputs) {
        super(webhook, githubCtx, inputs);
        this.timestamp = getTime();
        this.signKey = inputs.signKey;
    }
    async uploadLocalFile(url) {
        const { LARK_APP_ID = '', LARK_APP_SECRET = '' } = process.env;
        if (!(LARK_APP_ID && LARK_APP_SECRET)) {
            core.setFailed(`Action failed with error missing onf of [LARK_APP_ID, LARK_APP_SECRET]`);
            return '';
        }
        const tenant_access_token = await this.getAccessToken(LARK_APP_ID, LARK_APP_SECRET);
        if (!tenant_access_token)
            return '';
        const image = await fs.promises.readFile(url);
        const form_data = new FormData();
        form_data.append('image', image);
        form_data.append('image_type', 'message');
        const headers = {
            ...form_data.getHeaders(),
        };
        const request_config = {
            url: 'https://open.feishu.cn/open-apis/im/v1/images',
            method: 'POST',
            headers: {
                Authorization: `Bearer ${tenant_access_token}`,
                ...headers,
            },
            data: form_data,
        };
        const uploadRes = await axios.request(request_config).catch((err) => {
            core.debug(`img upload fail code: ${err.code} body: ${JSON.stringify(err.response.data)}`);
            return err.response;
        });
        if (uploadRes.status === 200 && uploadRes.data && uploadRes.data.code === 0) {
            core.debug(`imgKey:${uploadRes.data.data.image_key}`);
            return uploadRes.data.data.image_key;
        }
        core.setFailed(`upload faild`);
        return '';
    }
    async getAccessToken(LARK_APP_ID, LARK_APP_SECRET) {
        const res = await axios.request({
            url: 'https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal',
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            data: {
                app_id: LARK_APP_ID,
                app_secret: LARK_APP_SECRET,
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
        core.debug(`token:${tenant_access_token}`);
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
        const existsPic = await fs.pathExists(url);
        core.debug(`imageInfo: ${JSON.stringify(imageInfo)}`);
        core.debug(`existsPic: ${existsPic}`);
        if (imageInfo['enable'] === 'true' && existsPic) {
            image_key = await this.uploadLocalFile(url);
        }
        this.timestamp = getTime();
        if (this.signKey) {
            this.signature = this.genSin(this.signKey, this.timestamp);
        }
        core.debug(`signature: ${this.signature}`);
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
        const res = await axios({
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
        const res = await axios({
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
        const signature = CryptoJs.enc.Base64.stringify(CryptoJs.HmacSHA256('', crytoStr));
        return signature;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFyay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wbGF0L2xhcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLElBQUksTUFBTSxlQUFlLENBQUM7QUFDdEMsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUNqQyxPQUFPLFFBQVEsTUFBTSxXQUFXLENBQUM7QUFDakMsT0FBTyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRTFCLE9BQU8sTUFBd0IsTUFBTSxVQUFVLENBQUM7QUFFaEQsU0FBUyxPQUFPO0lBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQy9ELENBQUM7QUFFRCxNQUFNLENBQUMsT0FBTyxPQUFPLElBQUssU0FBUSxNQUFNO0lBSXRDLFlBQVksT0FBZSxFQUFFLFNBQWtCLEVBQUUsTUFBVztRQUMxRCxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUZwQyxjQUFTLEdBQVcsT0FBTyxFQUFFLENBQUM7UUFHNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxLQUFLLENBQUMsZUFBZSxDQUFDLEdBQVc7UUFDL0IsTUFBTSxFQUFFLFdBQVcsR0FBRyxFQUFFLEVBQUUsZUFBZSxHQUFHLEVBQUUsRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFFL0QsSUFBSSxDQUFDLENBQUMsV0FBVyxJQUFJLGVBQWUsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsd0VBQXdFLENBQUMsQ0FBQztZQUV6RixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsTUFBTSxtQkFBbUIsR0FBRyxNQUFN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