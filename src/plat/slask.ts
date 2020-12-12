import Notify, { Context, Res } from './notify';

export default class Slack extends Notify {
  constructor(webhook: string, githubCtx: Context, inputs: any) {
    super(webhook, githubCtx, inputs);
  }
  notify(): Promise<Res> {
    throw new Error('Method not implemented.');
  }
  genSin(_signKey: string | undefined, _timestamp: string): string {
    throw new Error('Method not implemented.');
  }
}
