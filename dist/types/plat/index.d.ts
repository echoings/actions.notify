import Custom from './custom';
import Lark from './lark';
import Slack from './slask';
import Telegram from './telegram';
import Pub from './event-bus';
declare const Plat: {
    [index: string]: typeof Lark | typeof Slack | typeof Telegram | typeof Custom;
};
export default Plat;
export declare const Publish: typeof Pub;
