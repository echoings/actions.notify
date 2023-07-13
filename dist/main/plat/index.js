"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const custom_1 = __importDefault(require("./custom"));
const lark_1 = __importDefault(require("./lark"));
const slack_1 = __importDefault(require("./slack"));
const telegram_1 = __importDefault(require("./telegram"));
const Plat = {
    Lark: lark_1.default,
    Slack: slack_1.default,
    Telegram: telegram_1.default,
    Custom: custom_1.default,
};
exports.default = Plat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGxhdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5QixrREFBMEI7QUFDMUIsb0RBQTRCO0FBQzVCLDBEQUFrQztBQUVsQyxNQUFNLElBQUksR0FFTjtJQUNGLElBQUksRUFBSixjQUFJO0lBQ0osS0FBSyxFQUFMLGVBQUs7SUFDTCxRQUFRLEVBQVIsa0JBQVE7SUFDUixNQUFNLEVBQU4sZ0JBQU07Q0FDUCxDQUFDO0FBRUYsa0JBQWUsSUFBSSxDQUFDIn0=