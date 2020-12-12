"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notify_1 = __importDefault(require("./notify"));
class Custom extends notify_1.default {
    constructor(webhook, githubCtx, options) {
        super(webhook, githubCtx, options);
    }
    notify() {
        throw new Error('Method not implemented.');
    }
    genSin(_signKey, _timestamp) {
        return 'Please generate signatue yourself';
    }
}
exports.default = Custom;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BsYXQvY3VzdG9tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQStDO0FBRS9DLE1BQXFCLE1BQU8sU0FBUSxnQkFBTTtJQUN4QyxZQUFZLE9BQWUsRUFBRSxTQUFrQixFQUFFLE9BQVk7UUFDM0QsS0FBSyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDcEMsQ0FBQztJQUNELE1BQU07UUFDSixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUNELE1BQU0sQ0FBQyxRQUE0QixFQUFFLFVBQWtCO1FBQ3JELE9BQU8sbUNBQW1DLENBQUE7SUFDNUMsQ0FBQztDQUNGO0FBVkQseUJBVUMifQ==