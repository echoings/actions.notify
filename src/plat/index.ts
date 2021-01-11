import Custom from './custom';
import Lark from './lark';
import Slack from './slack';
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
