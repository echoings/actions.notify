import { Context } from '@actions/github/lib/context';
export default abstract class Notify {
    signKey: string | undefined;
    signature: string | undefined;
    webhook: string;
    ctxFormatContent: any;
    options: any;
    timestamp: string;
    githubCtx: Context;
    constructor(webhook: string, githubCtx: Context, options: any);
    init(ctx?: Context): void;
    abstract notify(): any;
    abstract genSin(signKey: string | undefined, timestamp: string): string;
}
interface Res {
    code: number;
    data: any;
    msg: string;
}
export { Context, Res };
