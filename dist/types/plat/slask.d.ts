import Notify, { Context, Res } from './notify';
export default class Slack extends Notify {
    constructor(webhook: string, githubCtx: Context, signKey?: string);
    notify(): Promise<Res>;
    genSin(signKey: string | undefined, timestamp: string): string;
}
