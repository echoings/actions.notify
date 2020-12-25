import Notify, { Context, Res } from './notify';
export default class Lark extends Notify {
    signKey: string | undefined;
    signature: string | undefined;
    timestamp: string;
    constructor(webhook: string, githubCtx: Context, inputs: any);
    notify(): Promise<Res>;
    genSin(signKey: string | undefined, timestamp: string): string;
}
