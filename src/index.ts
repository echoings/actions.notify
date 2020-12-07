import core from '@actions/core'
import github from '@actions/github'
import path from 'path'
import Plat from './plat'

async function run() {
  try {
    const type = core.getInput('platType')
    const { NOTIFY_WEBHOOK, NOTIFY_SIGNKEY, GITHUB_WORKSPACE: sourceDir = '' } = process.env

    if (!type || !NOTIFY_WEBHOOK) {
      core.setFailed('required arg missing, please check your platType or NOTIFY_WEBHOOK setting')
      return
    }

    const notify = new Plat[type](NOTIFY_WEBHOOK, github.context, NOTIFY_SIGNKEY)

    notify.init(github.context)

    try {
      const echoFn = require(path.join(sourceDir, '.echo.js'))
      console.log(typeof echoFn)
      echoFn.apply(notify, github.context)
    } catch (error) {
      console.log(error)
    }

    console.log(__dirname)

    const res = await notify.notify()

    const msg = `code: ${res.code}, msg: ${res.msg}`
    core.setOutput('msg', msg)
  } catch (error) {
    core.setFailed(error)
  }
}

void run()
