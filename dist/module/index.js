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
import FormData from 'form-data';
import fs from 'fs-extra';
import Plat from './plat';
async function run() {
    try {
        const type = core.getInput('plat_type');
        const notifyTitle = core.getInput('notify_title') || 'Project Update';
        const notifyMessage = core.getInput('notify_message');
        const { NOTIFY_WEBHOOK, NOTIFY_SIGNKEY, GITHUB_WORKSPACE: sourceDir = '', JOB_FAILURE_STATUS, } = process.env;
        if (!type || !NOTIFY_WEBHOOK) {
            core.setFailed('required args is missing, please check your plat_type or NOTIFY_WEBHOOK setting');
            return;
        }
        const notify = new Plat[type](NOTIFY_WEBHOOK, github.context, {
            notifyTitle,
            notifyMessage,
            signKey: NOTIFY_SIGNKEY,
        });
        let msg;
        if (type === 'Custom') {
            try {
                const notifyFn = require(path.join(sourceDir, '.echo.actions.notify.js'));
                msg = await notifyFn.call(notify, {
                    envs: process.env,
                    ctx: github.context,
                    jobsFailureStatus: JOB_FAILURE_STATUS,
                }, {
                    axios,
                    FormData,
                    fs,
                    core,
                    github,
                    exec,
                    glob,
                    cache,
                    io,
                    toolCache,
                    artifact,
                });
            }
            catch (error) {
                core.setFailed(error);
            }
        }
        else {
            let res = {};
            if (JOB_FAILURE_STATUS === 'failure') {
                res = await notify.notifyFailure();
            }
            else {
                res = await notify.notify();
            }
            msg = `code: ${res.code}, msg: ${res.msg}`;
        }
        core.setOutput('msg', `${new Date() + ': ' + msg}`);
    }
    catch (error) {
        core.setFailed(error);
    }
}
void run();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBRXhCLE9BQU8sS0FBSyxRQUFRLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxLQUFLLEtBQUssTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEtBQUssSUFBSSxNQUFNLGVBQWUsQ0FBQztBQUN0QyxPQUFPLEtBQUssSUFBSSxNQUFNLGVBQWUsQ0FBQztBQUN0QyxPQUFPLEtBQUssTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sS0FBSyxJQUFJLE1BQU0sZUFBZSxDQUFDO0FBQ3RDLE9BQU8sS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2xDLE9BQU8sS0FBSyxTQUFTLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUNqQyxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFMUIsT0FBTyxJQUFJLE1BQU0sUUFBUSxDQUFDO0FBRTFCLEtBQUssVUFBVSxHQUFHO0lBQ2hCLElBQUk7UUFDRixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUM7UUFDdEUsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sRUFDSixjQUFjLEVBQ2QsY0FBYyxFQUNkLGdCQUFnQixFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQ2hDLGtCQUFrQixHQUNuQixHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFFaEIsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUM1QixJQUFJLENBQUMsU0FBUyxDQUNaLGlGQUFpRixDQUNsRixDQUFDO1lBQ0YsT0FBTztTQUNSO1FBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDNUQsV0FBVztZQUNYLGFBQWE7WUFDYixPQUFPLEVBQUUsY0FBYztTQUN4QixDQUFDLENBQUM7UUFFSCxJQUFJLEdBQUcsQ0FBQztRQUNSLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNyQixJQUFJO2dCQUNGLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7Z0JBQzFFLEdBQUcsR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLENBQ3ZCLE1BQU0sRUFDTjtvQkFDRSxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUc7b0JBQ2pCLEdBQUcsRUFBRSxNQUFNLENBQUMsT0FBTztvQkFDbkIsaUJBQWlCLEVBQUUsa0JBQWtCO2lCQUN0QyxFQUNEO29CQUNFLEtBQUs7b0JBQ0wsUUFBUTtvQkFDUixFQUFFO29CQUNGLElBQUk7b0JBQ0osTUFBTTtvQkFDTixJQUFJO29CQUNKLElBQUk7b0JBQ0osS0FBSztvQkFDTCxFQUFFO29CQUNGLFNBQVM7b0JBQ1QsUUFBUTtpQkFDVCxDQUNGLENBQUM7YUFDSDtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdkI7U0FDRjthQUFNO1lBQ0wsSUFBSSxHQUFHLEdBQVEsRUFBRSxDQUFDO1lBRWxCLElBQUksa0JBQWtCLEtBQUssU0FBUyxFQUFFO2dCQUNwQyxHQUFHLEdBQUcsTUFBTSxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDcEM7aUJBQU07Z0JBQ0wsR0FBRyxHQUFHLE1BQU0sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzdCO1lBRUQsR0FBRyxHQUFHLFNBQVMsR0FBRyxDQUFDLElBQUksVUFBVSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDNUM7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7S0FDckQ7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdkI7QUFDSCxDQUFDO0FBRUQsS0FBSyxHQUFHLEVBQUUsQ0FBQyJ9