import Lark from './lark';
import Slack from './slask';
import Telegram from './telegram';
import Custom from './custom';
declare const Plat: {
    [index: string]: typeof Lark | typeof Slack | typeof Telegram | typeof Custom;
};
export default Plat;
