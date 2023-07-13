import * as core from '@actions/core';
import axios from 'axios';
import CryptoJs from 'crypto-js';
import FormData from 'form-data';
import fs from 'fs-extra';

import Notify, { Context, Res } from './notify';

function getTime(): string {
  return (Date.parse(new Date().toString()) / 1000).toString();
}

export default class Lark extends Notify {
  signKey: string | undefined;
  signature: string | undefined;
  timestamp: string = getTime();
  constructor(webhook: string, githubCtx: Context, inputs: any) {
    super(webhook, githubCtx, inputs);
    this.signKey = inputs.signKey;
  }

  async uploadLocalFile(url: string, type: 'path' | 'base64'): Promise<string> {
    const { LARK_APP_ID = '', LARK_APP_SECRET = '' } = process.env;

    if (!(LARK_APP_ID && LARK_APP_SECRET)) {
      core.setFailed(`Action failed with error missing onf of [LARK_APP_ID, LARK_APP_SECRET]`);

      return '';
    }
    const tenant_access_token = await this.getAccessToken(LARK_APP_ID, LARK_APP_SECRET);

    if (!tenant_access_token) return '';
    const image =
      type === 'path'
        ? fs.createReadStream(url)
        : Buffer.from(url.replace(/^data:image\/\w+;base64,/, ''), 'base64');
    const form_data = new FormData();
    form_data.append('image', image);
    form_data.append('image_type', 'message');

    const headers = {
      ...form_data.getHeaders(),
    };

    const request_config: any = {
      url: 'https://open.feishu.cn/open-apis/im/v1/images',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${tenant_access_token}`,
        ...headers,
      },
      data: form_data,
    };

    const uploadRes = await axios.request(request_config).catch(err => {
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

  async getAccessToken(LARK_APP_ID: string, LARK_APP_SECRET: string): Promise<string> {
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

  async notify(): Promise<Res> {
    const enableImage = core.getInput('enable_image');
    const imageInfo: any = {};
    enableImage
      .replace(/\n/, '')
      .split(' ')
      .forEach(v => {
        const map = v.split('=');
        if (map[1]) {
          imageInfo[map[0]] = map[1];
        } else {
          imageInfo[map[0]] = true;
        }
      });

    let image_key = '';
    const { url = '', base64, title: imageTitle = '预览二维码' } = imageInfo;

    const existsPic = await fs.pathExists(url);

    core.debug(`imageInfo: ${JSON.stringify(imageInfo)}`);
    core.debug(`existsPic: ${existsPic}`);

    if (imageInfo['enable'] === 'true' && existsPic) {
      image_key = await this.uploadLocalFile(url, 'path');
    }
    if (imageInfo['enable'] === 'true' && base64) {
      image_key = await this.uploadLocalFile(base64, 'base64');
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
      const temp: any = {
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

    const res: any = await axios({
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

  async notifyFailure(): Promise<Res> {
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

    const res: any = await axios({
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

  genSin(signKey: string | undefined = this.signKey, timestamp: string): string {
    const crytoStr = `${timestamp}\n${signKey}`;
    const signature = CryptoJs.enc.Base64.stringify(CryptoJs.HmacSHA256('', crytoStr));

    return signature;
  }
}
