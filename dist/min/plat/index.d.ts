import Custom from './custom';
import Lark from './lark';
import Slack from './slask';
import Telegram from './telegram';
declare const Plat: {
    [index: string]: typeof Lark | typeof Slack | typeof Telegram | typeof Custom;
};
export default Plat;
