// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import core from '@actions/core'
import github from '@actions/github'
import Lark from './lark'

const Notify: {
  [index: string]: typeof Lark
} = {
  lark: Lark,
}
async function run() {
  try {
    const type = core.getInput('NOTIFY_TYPE')
    const webhook = core.getInput('NOTIFY_WEBHOOK')
    const signKey = core.getInput('NOTIFY_SIGNKEY')
    const instance = new Notify[type](webhook, signKey)

    const ans = await instance.start({ ...github.context, ...github.context.payload })

    if (ans.code === 0) {
      console.log('sucess')
    } else {
      throw ans
    }
  } catch (error) {
    console.log(error)
    core.setFailed(error)
  }
}

run()
