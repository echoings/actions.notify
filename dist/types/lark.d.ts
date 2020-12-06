import Notify from './notify';
export default class Lark extends Notify {
    constructor(webhook: string, signKey?: string);
    start(context: any): Promise<{
        code: number;
        data: any;
        msg: string;
    }>;
    genSin(timestamp: string): string;
    notify(): void;
}
