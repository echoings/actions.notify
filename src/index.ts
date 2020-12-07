import core from '@actions/core'
import github from '@actions/github'
import axios from 'axios'
import path from 'path'
import Plat from './plat'

async function run() {
  try {
    const type = core.getInput('platType')
    const selfNotify = core.getInput('selfNotify')
    const { NOTIFY_WEBHOOK, NOTIFY_SIGNKEY, GITHUB_WORKSPACE: sourceDir = '' } = process.env

    if (!type || !NOTIFY_WEBHOOK) {
      core.setFailed('required arg missing, please check your platType or NOTIFY_WEBHOOK setting')
      return
    }

    const notify = new Plat[type](NOTIFY_WEBHOOK, github.context, NOTIFY_SIGNKEY)

    let msg
    if (selfNotify === 'true') {
      try {
        const notifyFn = require(path.join(sourceDir, '.echo.actions.notify.js'))
        msg = await notifyFn.call(notify, github.context, process.env, axios, core)
      } catch (error) {
        core.setFailed(error)
      }
    } else {
      const res = await notify.notify()

      msg = `code: ${res.code}, msg: ${res.msg}`
    }

    core.setOutput('msg', msg)
  } catch (error) {
    core.setFailed(error)
  }
}

void run()
