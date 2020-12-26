"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publish = void 0;
const custom_1 = __importDefault(require("./custom"));
const lark_1 = __importDefault(require("./lark"));
const slask_1 = __importDefault(require("./slask"));
const telegram_1 = __importDefault(require("./telegram"));
const event_bus_1 = __importDefault(require("./event-bus"));
const Plat = {
    Lark: lark_1.default,
    Slack: slask_1.default,
    Telegram: telegram_1.default,
    Custom: custom_1.default,
};
exports.default = Plat;
exports.Publish = event_bus_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGxhdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsa0RBQTBCO0FBQzFCLG9EQUE0QjtBQUM1QiwwREFBa0M7QUFDbEMsNERBQThCO0FBRTlCLE1BQU0sSUFBSSxHQUVOO0lBQ0YsSUFBSSxFQUFKLGNBQUk7SUFDSixLQUFLLEVBQUwsZUFBSztJQUNMLFFBQVEsRUFBUixrQkFBUTtJQUNSLE1BQU0sRUFBTixnQkFBTTtDQUNQLENBQUM7QUFFRixrQkFBZSxJQUFJLENBQUM7QUFDUCxRQUFBLE9BQU8sR0FBRyxtQkFBRyxDQUFDIn0=