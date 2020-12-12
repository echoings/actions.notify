"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notify_1 = __importDefault(require("./notify"));
class Slack extends notify_1.default {
    constructor(webhook, githubCtx, options) {
        super(webhook, githubCtx, options);
    }
    notify() {
        throw new Error('Method not implemented.');
    }
    genSin(_signKey, _timestamp) {
        throw new Error('Method not implemented.');
    }
}
exports.default = Slack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xhc2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGxhdC9zbGFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUErQztBQUUvQyxNQUFxQixLQUFNLFNBQVEsZ0JBQU07SUFDdkMsWUFBWSxPQUFlLEVBQUUsU0FBa0IsRUFBRSxPQUFZO1FBQzNELEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFDRCxNQUFNO1FBQ0osTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUFDRCxNQUFNLENBQUMsUUFBNEIsRUFBRSxVQUFrQjtRQUNyRCxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUE7SUFDNUMsQ0FBQztDQUNGO0FBVkQsd0JBVUMifQ==