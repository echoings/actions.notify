import axios from 'axios';
import CryptoJs from 'crypto-js';

import Notify, { Context, Res } from './notify';

export default class Lark extends Notify {
  signKey: string | undefined;
  signature: string | undefined;
  timestamp: string = new Date().getTime().toString();
  constructor(webhook: string, githubCtx: Context, inputs: any) {
    super(webhook, githubCtx, inputs);
    this.signKey = inputs.signKey;
  }

  async notify(): Promise<Res> {
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
