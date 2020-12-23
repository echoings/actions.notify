import Notify, { Context, Res } from './notify';
export default class Slack extends Notify {
    constructor(webhook: string, githubCtx: Context, inputs: any);
    notify(): Promise<Res>;
    genSin(_signKey: string | undefined, _timestamp: string): string;
}
