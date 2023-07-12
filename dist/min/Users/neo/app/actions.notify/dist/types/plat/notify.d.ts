import { Context } from '@actions/github/lib/context';
export default abstract class Notify {
    webhook: string;
    ctxFormatContent: any;
    inputs: any;
    githubCtx: Context;
    constructor(webhook: string, githubCtx: Context, inputs: any);
    init(ctx?: Context): void;
    abstract notify(): any;
    abstract notifyFailure(): any;
}
interface Res {
    code: number;
    data: any;
    msg: string;
}
export { Context, Res };
