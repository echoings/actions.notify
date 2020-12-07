import core from '@actions/core'
import github from '@actions/github'
import Plat from './plat'

async function run() {
  try {
    const type = core.getInput('NOTIFY_TYPE')
    const webhook = core.getInput('NOTIFY_WEBHOOK')
    const signKey = core.getInput('NOTIFY_SIGNKEY')
    const notify = new Plat[type](webhook, github.context, signKey)

    notify.init(github.context)
    const res = await notify.notify()

    /**
     * notify wouldn't block the flow
     */
    if (res.code === 0) {
      console.log('sucess: ', res.msg)
    } else {
      console.log('error: ', res.msg)
    }
  } catch (error) {
    console.log(error)
    core.setFailed(error)
  }
}

void run()
