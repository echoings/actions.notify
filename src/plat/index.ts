import Lark from './lark';
import Slack from './slask';
import Telegram from './telegram';

const Plat: {
  [index: string]: typeof Lark | typeof Slack | typeof Telegram
} = {
  Lark,
  Slack,
  Telegram
}

export default Plat;