import Notify, { Context, Res } from './notify';
export default class Lark extends Notify {
    constructor(webhook: string, githubCtx: Context, inputs: any);
    notify(): Promise<Res>;
    genSin(signKey: string | undefined, timestamp: string): string;
}
