import * as core from '@actions/core';
import axios from 'axios';
import CryptoJs from 'crypto-js';
import FormData from 'form-data';
import fs from 'fs-extra';
import Notify from './notify';
export default class Lark extends Notify {
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
        const form_data = new FormData();
        form_data.append('image', fs.createReadStream(url));
        form_data.append('image_type', 'message');
        const headers = {
            ...form_data.getHeaders(),
        };
        const request_config = {
            url: 'https://open.feishu.cn/open-apis/image/v4/put/',
            method: 'POST',
            headers: {
                Authorization: `Bearer ${tenant_access_token}`,
                ...headers,
            },
            data: form_data,
        };
        const uploadRes = await axios.request(request_config);
        if (uploadRes.status === 200 && uploadRes.data && uploadRes.data.code === 0) {
            return uploadRes.data.data.image_key;
        }
        core.setFailed(`upload faild`);
        return '';
    }
    async getAccessToken(LARK_APP_ID, LARK_APP_SECRECT) {
        const res = await axios.request({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFyay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wbGF0L2xhcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLElBQUksTUFBTSxlQUFlLENBQUM7QUFDdEMsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUNqQyxPQUFPLFFBQVEsTUFBTSxXQUFXLENBQUM7QUFDakMsT0FBTyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRTFCLE9BQU8sTUFBd0IsTUFBTSxVQUFVLENBQUM7QUFFaEQsTUFBTSxDQUFDLE9BQU8sT0FBTyxJQUFLLFNBQVEsTUFBTTtJQUl0QyxZQUFZLE9BQWUsRUFBRSxTQUFrQixFQUFFLE1BQVc7UUFDMUQsS0FBSyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFGcEMsY0FBUyxHQUFXLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFHbEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxLQUFLLENBQUMsZUFBZSxDQUFDLEdBQVc7UUFDL0IsTUFBTSxFQUFFLFdBQVcsR0FBRyxFQUFFLEVBQUUsZ0JBQWdCLEdBQUcsRUFBRSxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUVoRSxJQUFJLENBQUMsQ0FBQyxXQUFXLElBQUksZ0JBQWdCLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLHlFQUF5RSxDQUFDLENBQUM7WUFFMUYsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELE1BQU0sbUJBQW1CLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXJGLElBQUksQ0FBQyxtQkFBbUI7WUFBRSxPQUFPLEVBQUUsQ0FBQztR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