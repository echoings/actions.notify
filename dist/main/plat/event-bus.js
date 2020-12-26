"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 事件机制
 */
class EventEmitter {
    constructor() {
        this.listeners = {};
        this.listeners = {};
    }
    /**
     * 注册事件
     * @param {事件类型} event
     * @param {} callback
     */
    on(event, callback) {
        if (!event || !callback)
            return;
        if (this.listeners[event]) {
            this.listeners[event].push(callback);
        }
        else {
            this.listeners[event] = [callback];
        }
    }
    /**
     * 订阅一次
     * @param {*} event
     * @param {*} callback
     */
    once(event, callback) {
        if (!event || !callback)
            return;
        function wrap(...args) {
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
    off(event, callback) {
        if (!event)
            return;
        if (!callback) {
            delete this.listeners[event];
            return;
        }
        this.listeners[event].filter((v) => v !== callback);
    }
    emit(event, ...args) {
        if (this.listeners[event]) {
            this.listeners[event].forEach((e) => e.call(this, ...args));
        }
    }
    async notify() {
        if (Object.keys(this.listeners).length === 0)
            return;
        let sub = [];
        let types = [];
        Object.keys(this.listeners).forEach(type => {
            types.push(type);
            this.listeners[type].forEach(e => {
                sub.push(e);
            });
        });
        let res = [];
        await Promise.all(sub).then(values => {
            values.forEach((v, index) => {
                res.push(Object.assign({ type: types[index] }, v));
            });
        });
        return res;
    }
}
exports.default = EventEmitter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtYnVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BsYXQvZXZlbnQtYnVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0dBRUc7QUFDSCxNQUFxQixZQUFZO0lBRS9CO1FBREEsY0FBUyxHQUFrQyxFQUFFLENBQUE7UUFFM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxFQUFFLENBQUMsS0FBYSxFQUFFLFFBQWtCO1FBQ2xDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUNoQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEM7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFDRDs7OztPQUlHO0lBQ0gsSUFBSSxDQUFDLEtBQWEsRUFBRSxRQUFrQjtRQUNwQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDaEMsU0FBUyxJQUFJLENBQVksR0FBRyxJQUFXO1lBQ3JDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsbUNBQW1DO1lBQ3RELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILEdBQUcsQ0FBQyxLQUFzQixFQUFFLFFBQWE7UUFDdkMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsSUFBSSxDQUFDLEtBQXNCLEVBQUUsR0FBRyxJQUFXO1FBQ3pDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzdEO0lBQ0gsQ0FBQztJQUNELEtBQUssQ0FBQyxNQUFNO1FBQ1YsSUFBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLE9BQU87UUFFcEQsSUFBSSxHQUFHLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLElBQUksS0FBSyxHQUFRLEVBQUUsQ0FBQTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2IsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQ0YsQ0FBQztRQUVGLElBQUksR0FBRyxHQUFRLEVBQUUsQ0FBQztRQUNsQixNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFNLEVBQUUsS0FBYSxFQUFFLEVBQUU7Z0JBQ3ZDLEdBQUcsQ0FBQyxJQUFJLGlCQUNOLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQ2YsQ0FBQyxFQUNKLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0NBQ0Y7QUExRUQsK0JBMEVDIn0=