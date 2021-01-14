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
const form_data_1 = __importDefault(require("form-data"));
const fs_extra_1 = __importDefault(require("fs-extra"));
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
                    FormData: form_data_1.default,
                    fs: fs_extra_1.default,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQXdCO0FBRXhCLDREQUE4QztBQUM5QyxzREFBd0M7QUFDeEMsb0RBQXNDO0FBQ3RDLG9EQUFzQztBQUN0Qyx3REFBMEM7QUFDMUMsb0RBQXNDO0FBQ3RDLGdEQUFrQztBQUNsQywrREFBaUQ7QUFDakQsa0RBQTBCO0FBQzFCLDBEQUFpQztBQUNqQyx3REFBMEI7QUFFMUIsa0RBQTBCO0FBRTFCLEtBQUssVUFBVSxHQUFHO0lBQ2hCLElBQUk7UUFDRixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUM7UUFDdEUsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sRUFDSixjQUFjLEVBQ2QsY0FBYyxFQUNkLGdCQUFnQixFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQ2hDLGtCQUFrQixHQUNuQixHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFFaEIsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUM1QixJQUFJLENBQUMsU0FBUyxDQUNaLGlGQUFpRixDQUNsRixDQUFDO1lBQ0YsT0FBTztTQUNSO1FBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxjQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDNUQsV0FBVztZQUNYLGFBQWE7WUFDYixPQUFPLEVBQUUsY0FBYztTQUN4QixDQUFDLENBQUM7UUFFSCxJQUFJLEdBQUcsQ0FBQztRQUNSLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNyQixJQUFJO2dCQUNGLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7Z0JBQzFFLEdBQUcsR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLENBQ3ZCLE1BQU0sRUFDTjtvQkFDRSxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUc7b0JBQ2pCLEdBQUcsRUFBRSxNQUFNLENBQUMsT0FBTztvQkFDbkIsaUJBQWlCLEVBQUUsa0JBQWtCO2lCQUN0QyxFQUNEO29CQUNFLEtBQUssRUFBTCxlQUFLO29CQUNMLFFBQVEsRUFBUixtQkFBUTtvQkFDUixFQUFFLEVBQUYsa0JBQUU7b0JBQ0YsSUFBSTtvQkFDSixNQUFNO29CQUNOLElBQUk7b0JBQ0osSUFBSTtvQkFDSixLQUFLO29CQUNMLEVBQUU7b0JBQ0YsU0FBUztvQkFDVCxRQUFRO2lCQUNULENBQ0YsQ0FBQzthQUNIO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN2QjtTQUNGO2FBQU07WUFDTCxJQUFJLEdBQUcsR0FBUSxFQUFFLENBQUM7WUFFbEIsSUFBSSxrQkFBa0IsS0FBSyxTQUFTLEVBQUU7Z0JBQ3BDLEdBQUcsR0FBRyxNQUFNLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUNwQztpQkFBTTtnQkFDTCxHQUFHLEdBQUcsTUFBTSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDN0I7WUFFRCxHQUFHLEdBQUcsU0FBUyxHQUFHLENBQUMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUM1QztRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztLQUNyRDtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN2QjtBQUNILENBQUM7QUFFRCxLQUFLLEdBQUcsRUFBRSxDQUFDIn0=