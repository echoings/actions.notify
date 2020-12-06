import axios from 'axios'
import HmacSHA256 from 'crypto-js/hmac-sha256'
import Notify from './notify'

export default class Lark extends Notify {
  constructor(webhook: string, signKey?: string) {
    super(webhook, signKey)
  }

  async start(context: any): Promise<{ code: number; data: any; msg: string }> {
    const timestamp = new Date().getTime().toString()

    let sign
    if (this.signKey) {
      sign = this.genSin(timestamp)
    }

    const { ref, actor, commits = [], repository = {}, workflow, eventName, sha } = context

    let content: any = []
    commits.map((item: any) => content.push(item.message))
    const actionUrl = `${repository.url}/commit/${sha}/checks/${workflow}`

    const requestPayload = {
      msg_type: 'interactive',
      card: {
        config: {
          wide_screen_mode: true,
          enable_forward: true,
        },
        header: {
          title: {
            content: '项目更新',
            tag: 'plain_text',
          },
          template: 'red',
        },
        elements: [
          {
            tag: 'div',
            text: {
              content: `**Author** ${actor}`,
              tag: 'lark_md',
            },
          },
          {
            tag: 'div',
            text: {
              content: `**Ref** ${ref}  **Event** ${eventName}`,
              tag: 'lark_md',
            },
          },
          {
            tag: 'div',
            text: {
              content: `**Message**，\n ${content.join('\n')}`,
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
                url: `${actionUrl}`,
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

  genSin(timestamp: string): string {
    const crytoStr = `${timestamp}\n${this.signKey}`
    const signature = HmacSHA256(this.signKey || '', crytoStr).toString()

    return Buffer.from(signature).toString('base64')
  }

  notify() {}
}
