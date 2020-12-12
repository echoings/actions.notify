import Notify, { Context, Res } from './notify';
export default class Telegram extends Notify {
    constructor(webhook: string, githubCtx: Context, options: any);
    notify(): Promise<Res>;
    genSin(_signKey: string | undefined, _timestamp: string): string;
}
