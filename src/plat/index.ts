import Lark from './lark'
import Slack from './slask'
import Telegram from './telegram'
import Custom from './custom'

const Plat: {
  [index: string]: typeof Lark | typeof Slack | typeof Telegram | typeof Custom
} = {
  Lark,
  Slack,
  Telegram,
  Custom,
}

export default Plat
