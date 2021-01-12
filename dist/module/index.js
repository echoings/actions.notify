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
import Plat from './plat';
async function run() {
    try {
        const type = core.getInput('plat_type');
        const notifyTitle = core.getInput('notify_title') || 'Project Update';
        const notifyMessage = core.getInput('notify_message');
        const { NOTIFY_WEBHOOK, NOTIFY_SIGNKEY, GITHUB_WORKSPACE: sourceDir = '', JOB_FAILURE_STATUS } = process.env;
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
                    jobsFailureStatus: JOB_FAILURE_STATUS
                }, {
                    axios,
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
            if (JOB_FAILURE_STATUS) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBRXhCLE9BQU8sS0FBSyxRQUFRLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxLQUFLLEtBQUssTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEtBQUssSUFBSSxNQUFNLGVBQWUsQ0FBQztBQUN0QyxPQUFPLEtBQUssSUFBSSxNQUFNLGVBQWUsQ0FBQztBQUN0QyxPQUFPLEtBQUssTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sS0FBSyxJQUFJLE1BQU0sZUFBZSxDQUFDO0FBQ3RDLE9BQU8sS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2xDLE9BQU8sS0FBSyxTQUFTLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBRTFCLE9BQU8sSUFBSSxNQUFNLFFBQVEsQ0FBQztBQUUxQixLQUFLLFVBQVUsR0FBRztJQUNoQixJQUFJO1FBQ0YsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1FBQ3RFLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN0RCxNQUFNLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLGtCQUFrQixFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUc3RyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQzVCLElBQUksQ0FBQyxTQUFTLENBQ1osaUZBQWlGLENBQ2xGLENBQUM7WUFDRixPQUFPO1NBQ1I7UUFFRCxNQUFNLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUM1RCxXQUFXO1lBQ1gsYUFBYTtZQUNiLE9BQU8sRUFBRSxjQUFjO1NBQ3hCLENBQUMsQ0FBQztRQUVILElBQUksR0FBRyxDQUFDO1FBQ1IsSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ3JCLElBQUk7Z0JBQ0YsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLHlCQUF5QixDQUFDLENBQUMsQ0FBQztnQkFDMUUsR0FBRyxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksQ0FDdkIsTUFBTSxFQUNOO29CQUNFLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRztvQkFDakIsR0FBRyxFQUFFLE1BQU0sQ0FBQyxPQUFPO29CQUNuQixpQkFBaUIsRUFBRSxrQkFBa0I7aUJBQ3RDLEVBQ0Q7b0JBQ0UsS0FBSztvQkFDTCxJQUFJO29CQUNKLE1BQU07b0JBQ04sSUFBSTtvQkFDSixJQUFJO29CQUNKLEtBQUs7b0JBQ0wsRUFBRTtvQkFDRixTQUFTO29CQUNULFFBQVE7aUJBQ1QsQ0FDRixDQUFDO2FBQ0g7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3ZCO1NBQ0Y7YUFBTTtZQUNMLElBQUksR0FBRyxHQUFRLEVBQUUsQ0FBQztZQUVsQixJQUFHLGtCQUFrQixFQUFFO2dCQUNyQixHQUFHLEdBQUcsTUFBTSxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDcEM7aUJBQU07Z0JBQ0wsR0FBRyxHQUFHLE1BQU0sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzdCO1lBRUQsR0FBRyxHQUFHLFNBQVMsR0FBRyxDQUFDLElBQUksVUFBVSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDNUM7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7S0FDckQ7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdkI7QUFDSCxDQUFDO0FBRUQsS0FBSyxHQUFHLEVBQUUsQ0FBQyJ9