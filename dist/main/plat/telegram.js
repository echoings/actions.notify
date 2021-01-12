"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notify_1 = __importDefault(require("./notify"));
class Telegram extends notify_1.default {
    constructor(webhook, githubCtx, inputs) {
        super(webhook, githubCtx, inputs);
    }
    notify() {
        throw new Error('Method not implemented.');
    }
    async notifyFailure() {
        return '';
    }
}
exports.default = Telegram;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVsZWdyYW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGxhdC90ZWxlZ3JhbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUFnRDtBQUVoRCxNQUFxQixRQUFTLFNBQVEsZ0JBQU07SUFDMUMsWUFBWSxPQUFlLEVBQUUsU0FBa0IsRUFBRSxNQUFXO1FBQzFELEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxNQUFNO1FBQ0osTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxLQUFLLENBQUMsYUFBYTtRQUNqQixPQUFPLEVBQUUsQ0FBQTtJQUNYLENBQUM7Q0FDRjtBQVZELDJCQVVDIn0=