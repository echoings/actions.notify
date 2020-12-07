import axios from 'axios'
import HmacSHA256 from 'crypto-js/hmac-sha256'
import Notify, { Context, Res } from './notify'

export default class Lark extends Notify {
  constructor(webhook: string, githubCtx: Context, options: any) {
    super(webhook, githubCtx, options)
  }

  async notify(): Promise<Res> {
    const { ctxFormatContent, timestamp, signature, options, githubCtx: ctx } = this

    const requestPayload = {
      timestamp,
      signature,
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
    const signature = HmacSHA256(this.signKey || '', crytoStr).toString()

    return Buffer.from(signature).toString('base64')
  }
}
