import Notify, { Context, Res } from './notify'

export default class Slack extends Notify {
  constructor(webhook: string, githubCtx: Context, options: any) {
    super(webhook, githubCtx, options)
  }
  notify(): Promise<Res> {
    throw new Error('Method not implemented.')
  }
  genSin(signKey: string | undefined, timestamp: string): string {
    throw new Error('Method not implemented.')
  }
}
