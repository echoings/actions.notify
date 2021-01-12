import Notify, { Context, Res } from './notify';

export default class Custom extends Notify {
  constructor(webhook: string, githubCtx: Context, inputs: any) {
    super(webhook, githubCtx, inputs);
  }
  notify(): Promise<Res> {
    throw new Error('Method not implemented.');
  }
  async notifyFailure(): Promise<string> {
    return '';
  }
}
