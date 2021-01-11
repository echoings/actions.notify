import axios from 'axios';
import CryptoJs from 'crypto-js';
import core from '@actions/core';
import fs from 'fs-extra';
import FormData from 'form-data';
import Notify from './notify';
export default class Lark extends Notify {
    constructor(webhook, githubCtx, inputs) {
        super(webhook, githubCtx, inputs);
        this.timestamp = new Date().getTime().toString();
        this.signKey = inputs.signKey;
    }
    async uploadLocalFile() {
        const { LARK_APP_ID = '', LARK_APP_SECRECT = '', LARK_PREVIEW_PIC_DIR = '' } = process.env;
        if (!(LARK_PREVIEW_PIC_DIR && LARK_APP_ID && LARK_APP_SECRECT)) {
            core.setFailed(`Action failed with error missing onf of [LARK_PREVIEW_PIC_DIR, LARK_APP_ID, LARK_APP_SECRECT]`);
            return '';
        }
        const tenant_access_token = await this.getAccessToken(LARK_APP_ID, LARK_APP_SECRECT);
        if (!tenant_access_token)
            return '';
        const form_data = new FormData();
        form_data.append("image", fs.createReadStream(LARK_PREVIEW_PIC_DIR));
        form_data.append('image_type', "message");
        const headers = {
            ...form_data.getHeaders(),
        };
        const request_config = {
            url: "https://open.feishu.cn/open-apis/image/v4/put/",
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${tenant_access_token}`,
                ...headers
            },
            data: form_data
        };
        const uploadRes = await axios.request(request_config);
        if (uploadRes.status === 200 && uploadRes.data && uploadRes.data.code === 0) {
            return uploadRes.data.data.image_key;
        }
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
        const enableImage = core.getInput('enableImage');
        let image_key = '';
        if (enableImage) {
            image_key = await this.uploadLocalFile();
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
                        tag: 'img',
                        title: {
                            tag: 'lark_md',
                            content: '开发预览二维码',
                        },
                        mode: 'crop_center',
                        img_key: `${image_key}`,
                        alt: {
                            tag: 'plain_text',
                            content: '开发预览二维码',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFyay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wbGF0L2xhcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUNqQyxPQUFPLElBQUksTUFBTSxlQUFlLENBQUM7QUFDakMsT0FBTyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzFCLE9BQU8sUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUNqQyxPQUFPLE1BQXdCLE1BQU0sVUFBVSxDQUFDO0FBRWhELE1BQU0sQ0FBQyxPQUFPLE9BQU8sSUFBSyxTQUFRLE1BQU07SUFJdEMsWUFBWSxPQUFlLEVBQUUsU0FBa0IsRUFBRSxNQUFXO1FBQzFELEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRnBDLGNBQVMsR0FBVyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBR2xELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNoQyxDQUFDO0lBRUQsS0FBSyxDQUFDLGVBQWU7UUFDbkIsTUFBTSxFQUNKLFdBQVcsR0FBRyxFQUFFLEVBQ2hCLGdCQUFnQixHQUFHLEVBQUUsRUFDckIsb0JBQW9CLEdBQUcsRUFBRSxFQUMxQixHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFFaEIsSUFBSSxDQUFDLENBQUMsb0JBQW9CLElBQUksV0FBVyxJQUFJLGdCQUFnQixDQUFDLEVBQUU7WUFDOUQsSUFBSSxDQUFDLFNBQVMsQ0FDWiwrRkFBK0YsQ0FDaEcsQ0FBQztZQUVGLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxNQUFNLG1CQUFtQixHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUVyRixJQUFHLENBQUMsbUJBQW1C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