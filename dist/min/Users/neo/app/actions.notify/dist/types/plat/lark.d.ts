import Notify, { Context, Res } from './notify';
export default class Lark extends Notify {
    signKey: string | undefined;
    signature: string | undefined;
    timestamp: string;
    constructor(webhook: string, githubCtx: Context, inputs: any);
    uploadLocalFile(url: string, type: 'path' | 'base64'): Promise<string>;
    getAccessToken(LARK_APP_ID: string, LARK_APP_SECRET: string): Promise<string>;
    notify(): Promise<Res>;
    notifyFailure(): Promise<Res>;
    genSin(signKey: string | undefined, timestamp: string): string;
}
