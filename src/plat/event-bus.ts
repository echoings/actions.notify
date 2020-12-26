/**
 * 事件机制
 */
export default class EventEmitter {
  listeners: { [index: string]: Array<any> } = {};
  constructor() {
    this.listeners = {};
  }
  /**
   * 注册事件
   * @param {事件类型} event
   * @param {} callback
   */
  on(event: string, callback: any) {
    if (!event || !callback) return;
    if (this.listeners[event]) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  }
  /**
   * 订阅一次
   * @param {*} event
   * @param {*} callback
   */
  once(event: string, callback: any) {
    if (!event || !callback) return;
    function wrap(this: any, ...args: any[]) {
      callback(...args); // callback.apply(this, arguments);
      this.off(event, callback);
    }
    this.on(event, wrap);
  }
  /**
   * 取消订阅
   * @param {} event
   * @param {*} callback
   */
  off(event: string | number, callback: any) {
    if (!event) return;
    if (!callback) {
      delete this.listeners[event];
      return;
    }
    this.listeners[event].filter(v => v !== callback);
  }
  emit(event: string | number, ...args: any[]) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(e => e.call(this, ...args));
    }
  }
  async notify(): Promise<any> {
    if (Object.keys(this.listeners).length === 0) return;

    const sub: any = [];
    const types: any = [];
    Object.keys(this.listeners).forEach(type => {
      types.push(type);
      this.listeners[type].forEach(e => {
        sub.push(e);
      });
    });

    const res: any = [];
    await Promise.all(sub).then(values => {
      values.forEach((v: any, index: number) => {
        res.push({
          type: types[index],
          ...v,
        });
      });
    });

    return res;
  }
}
