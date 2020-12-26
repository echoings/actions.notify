/**
 * 事件机制
 */
export default class EventEmitter {
    listeners: {
        [index: string]: Array<any>;
    };
    constructor();
    /**
     * 注册事件
     * @param {事件类型} event
     * @param {} callback
     */
    on(event: string, callback: Function): void;
    /**
     * 订阅一次
     * @param {*} event
     * @param {*} callback
     */
    once(event: string, callback: Function): void;
    /**
     * 取消订阅
     * @param {} event
     * @param {*} callback
     */
    off(event: string | number, callback: any): void;
    emit(event: string | number, ...args: any[]): void;
    notify(): Promise<any>;
}
