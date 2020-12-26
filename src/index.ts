import path from 'path';

import * as artifact from '@actions/artifact';
import * as cache from '@actions/cache';
import * as core from '@actions/core';
import * as exec from '@actions/exec';
import * as github from '@actions/github';
import * as glob from '@actions/glob';
import * as io from '@actions/io';
import * as toolCache from '@actions/tool-cache';
import axios from 'axios';

import Plat, { Publish } from './plat';

async function run() {
  try {
    const type = core.getInput('plat_type');
    const notifyTitle = core.getInput('notify_title') || 'Project Update';
    const notifyMessage = core.getInput('notify_message');
    const { NOTIFY_WEBHOOK, NOTIFY_SIGNKEY, GITHUB_WORKSPACE: sourceDir = '' } = process.env;

    if (!type || !NOTIFY_WEBHOOK) {
      core.setFailed(
        'required args is missing, please check your plat_type or NOTIFY_WEBHOOK setting',
      );
      return;
    }

    const Pub = new Publish();
    const sub: { [index: string]: any } = {};
    type.split(',').forEach(v => {
      const subscribe = new Plat[type](NOTIFY_WEBHOOK, github.context, {
        notifyTitle,
        notifyMessage,
        signKey: NOTIFY_SIGNKEY,
      });

      sub[v] = subscribe;
      Pub.on(v, subscribe.notify);
    });

    let msg = '';
    if (type === 'Custom') {
      try {
        const notifyFn = require(path.join(sourceDir, '.echo.actions.notify.js'));
        msg = await notifyFn.call(
          sub,
          {
            envs: process.env,
            ctx: github.context,
          },
          {
            axios,
            core,
            github,
            exec,
            glob,
            cache,
            io,
            toolCache,
            artifact,
          },
        );
      } catch (error) {
        core.setFailed(error);
      }
    } else {
      const res = await Pub.notify();

      res.forEach((v: any) => {
        msg += `type: ${v.type}, code: ${v.code}, msg: ${v.msg}\n`;
      });
    }

    core.setOutput('msg', `${new Date() + ': ' + msg}`);
  } catch (error) {
    core.setFailed(error);
  }
}

void run();
