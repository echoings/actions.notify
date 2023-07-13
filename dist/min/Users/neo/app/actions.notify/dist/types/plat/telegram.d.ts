import Notify, { Context, Res } from './notify';
export default class Telegram extends Notify {
    constructor(webhook: string, githubCtx: Context, inputs: any);
    notify(): Promise<Res>;
    notifyFailure(): Promise<string>;
}
