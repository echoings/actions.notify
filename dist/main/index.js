"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const artifact = __importStar(require("@actions/artifact"));
const cache = __importStar(require("@actions/cache"));
const core = __importStar(require("@actions/core"));
const exec = __importStar(require("@actions/exec"));
const github = __importStar(require("@actions/github"));
const glob = __importStar(require("@actions/glob"));
const io = __importStar(require("@actions/io"));
const toolCache = __importStar(require("@actions/tool-cache"));
const axios_1 = __importDefault(require("axios"));
const plat_1 = __importDefault(require("./plat"));
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
        const notify = new plat_1.default[type](NOTIFY_WEBHOOK, github.context, {
            notifyTitle,
            notifyMessage,
            signKey: NOTIFY_SIGNKEY,
        });
        let msg;
        if (type === 'Custom') {
            try {
                const notifyFn = require(path_1.default.join(sourceDir, '.echo.actions.notify.js'));
                msg = await notifyFn.call(notify, {
                    envs: process.env,
                    ctx: github.context,
                    jobsFailureStatus: JOB_FAILURE_STATUS,
                }, {
                    axios: axios_1.default,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQXdCO0FBRXhCLDREQUE4QztBQUM5QyxzREFBd0M7QUFDeEMsb0RBQXNDO0FBQ3RDLG9EQUFzQztBQUN0Qyx3REFBMEM7QUFDMUMsb0RBQXNDO0FBQ3RDLGdEQUFrQztBQUNsQywrREFBaUQ7QUFDakQsa0RBQTBCO0FBRTFCLGtEQUEwQjtBQUUxQixLQUFLLFVBQVUsR0FBRztJQUNoQixJQUFJO1FBQ0YsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1FBQ3RFLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN0RCxNQUFNLEVBQ0osY0FBYyxFQUNkLGNBQWMsRUFDZCxnQkFBZ0IsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUNoQyxrQkFBa0IsR0FDbkIsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBRWhCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FDWixpRkFBaUYsQ0FDbEYsQ0FBQztZQUNGLE9BQU87U0FDUjtRQUVELE1BQU0sTUFBTSxHQUFHLElBQUksY0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQzVELFdBQVc7WUFDWCxhQUFhO1lBQ2IsT0FBTyxFQUFFLGNBQWM7U0FDeEIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxHQUFHLENBQUM7UUFDUixJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDckIsSUFBSTtnQkFDRixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUseUJBQXlCLENBQUMsQ0FBQyxDQUFDO2dCQUMxRSxHQUFHLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUN2QixNQUFNLEVBQ047b0JBQ0UsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHO29CQUNqQixHQUFHLEVBQUUsTUFBTSxDQUFDLE9BQU87b0JBQ25CLGlCQUFpQixFQUFFLGtCQUFrQjtpQkFDdEMsRUFDRDtvQkFDRSxLQUFLLEVBQUwsZUFBSztvQkFDTCxJQUFJO29CQUNKLE1BQU07b0JBQ04sSUFBSTtvQkFDSixJQUFJO29CQUNKLEtBQUs7b0JBQ0wsRUFBRTtvQkFDRixTQUFTO29CQUNULFFBQVE7aUJBQ1QsQ0FDRixDQUFDO2FBQ0g7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3ZCO1NBQ0Y7YUFBTTtZQUNMLElBQUksR0FBRyxHQUFRLEVBQUUsQ0FBQztZQUVsQixJQUFJLGtCQUFrQixLQUFLLFNBQVMsRUFBRTtnQkFDcEMsR0FBRyxHQUFHLE1BQU0sTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3BDO2lCQUFNO2dCQUNMLEdBQUcsR0FBRyxNQUFNLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUM3QjtZQUVELEdBQUcsR0FBRyxTQUFTLEdBQUcsQ0FBQyxJQUFJLFVBQVUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQzVDO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0tBQ3JEO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3ZCO0FBQ0gsQ0FBQztBQUVELEtBQUssR0FBRyxFQUFFLENBQUMifQ==