export default class Notify {
    signKey: string | undefined;
    webhook: string;
    constructor(webhook: string, signKey?: string);
    start(context: any): void;
    genSin(timestamp: string): void;
    notify(): void;
}
