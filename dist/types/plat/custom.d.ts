import Notify, { Context, Res } from './notify';
export default class Custom extends Notify {
    constructor(webhook: string, githubCtx: Context, inputs: any);
    notify(): Promise<Res>;
}