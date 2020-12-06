export default class Notify {
  signKey: string | undefined
  webhook: string
  constructor(webhook: string, signKey?: string) {
    this.webhook = webhook
    this.signKey = signKey
  }

  start(context: any) {}

  genSin(timestamp: string) {}

  notify() {}
}
