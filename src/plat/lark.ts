import axios from 'axios'
import CryptoJs from 'crypto-js'
import Notify, { Context, Res } from './notify'

export default class Lark extends Notify {
  constructor(webhook: string, githubCtx: Context, options: any) {
    super(webhook, githubCtx, options)
  }

  async notify(): Promise<Res> {
    const { ctxFormatContent, timestamp, signature: sign, options, githubCtx: ctx } = this

    const requestPayload = {
      timestamp,
      sign,
      msg_type: 'interactive',
      card: {
        config: {
          wide_screen_mode: true,
          enable_forward: true,
        },
        header: {
          title: {
            content: `${options.notifyTitle}`,
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
              content: `**Message**，\n ${options.notifyMessage ||
                ctxFormatContent.commitsContent}`,
              tag: 'lark_md',
            },
          },
          {
            actions: [
              {
                tag: 'button',
                text: {
                  content: '更多部署信息 :玫瑰:',
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
    }

    const res: any = await axios({
      method: 'post',
      url: this.webhook,
      data: requestPayload,
    })

    return {
      code: res.code || res.data.StatusCode,
      data: res.data,
      msg: res.msg,
    }
  }

  genSin(signKey: string | undefined = this.signKey, timestamp: string): string {
    const crytoStr = `${timestamp}\n${this.signKey}`
    const signature = CryptoJs.enc.Base64.stringify(CryptoJs.HmacSHA256('', crytoStr))

    return signature
  }
}
