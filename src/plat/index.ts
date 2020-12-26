import Custom from './custom';
import Pub from './event-bus';
import Lark from './lark';
import Slack from './slask';
import Telegram from './telegram';

const Plat: {
  [index: string]: typeof Lark | typeof Slack | typeof Telegram | typeof Custom;
} = {
  Lark,
  Slack,
  Telegram,
  Custom,
};

export default Plat;
export const Publish = Pub;
