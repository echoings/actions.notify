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
const plat_1 = __importStar(require("./plat"));
async function run() {
    try {
        const type = core.getInput('plat_type');
        const notifyTitle = core.getInput('notify_title') || 'Project Update';
        const notifyMessage = core.getInput('notify_message');
        const { NOTIFY_WEBHOOK, NOTIFY_SIGNKEY, GITHUB_WORKSPACE: sourceDir = '' } = process.env;
        if (!type || !NOTIFY_WEBHOOK) {
            core.setFailed('required args is missing, please check your plat_type or NOTIFY_WEBHOOK setting');
            return;
        }
        const Pub = new plat_1.Publish();
        let sub = {};
        type.split(',').forEach(v => {
            const subscribe = new plat_1.default[type](NOTIFY_WEBHOOK, github.context, {
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
                const notifyFn = require(path_1.default.join(sourceDir, '.echo.actions.notify.js'));
                msg = await notifyFn.call(sub, {
                    envs: process.env,
                    ctx: github.context,
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
            const res = await Pub.notify();
            res.forEach((v) => {
                msg += `type: ${v.type}, code: ${v.code}, msg: ${v.msg}\n`;
            });
        }
        core.setOutput('msg', `${new Date() + ': ' + msg}`);
    }
    catch (error) {
        core.setFailed(error);
    }
}
void run();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQXdCO0FBRXhCLDREQUE4QztBQUM5QyxzREFBd0M7QUFDeEMsb0RBQXNDO0FBQ3RDLG9EQUFzQztBQUN0Qyx3REFBMEM7QUFDMUMsb0RBQXNDO0FBQ3RDLGdEQUFrQztBQUNsQywrREFBaUQ7QUFDakQsa0RBQTBCO0FBRTFCLCtDQUF1QztBQUV2QyxLQUFLLFVBQVUsR0FBRztJQUNoQixJQUFJO1FBQ0YsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1FBQ3RFLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN0RCxNQUFNLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUV6RixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQzVCLElBQUksQ0FBQyxTQUFTLENBQ1osaUZBQWlGLENBQ2xGLENBQUM7WUFDRixPQUFPO1NBQ1I7UUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzFCLElBQUksR0FBRyxHQUEyQixFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDMUIsTUFBTSxTQUFTLEdBQUcsSUFBSSxjQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUU7Z0JBQy9ELFdBQVc7Z0JBQ1gsYUFBYTtnQkFDYixPQUFPLEVBQUUsY0FBYzthQUN4QixDQUFDLENBQUM7WUFFSCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksR0FBRyxHQUFXLEVBQUUsQ0FBQztRQUNyQixJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDckIsSUFBSTtnQkFDRixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUseUJBQXlCLENBQUMsQ0FBQyxDQUFDO2dCQUMxRSxHQUFHLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUN2QixHQUFHLEVBQ0g7b0JBQ0UsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHO29CQUNqQixHQUFHLEVBQUUsTUFBTSxDQUFDLE9BQU87aUJBQ3BCLEVBQ0Q7b0JBQ0UsS0FBSyxFQUFMLGVBQUs7b0JBQ0wsSUFBSTtvQkFDSixNQUFNO29CQUNOLElBQUk7b0JBQ0osSUFBSTtvQkFDSixLQUFLO29CQUNMLEVBQUU7b0JBQ0YsU0FBUztvQkFDVCxRQUFRO2lCQUNULENBQ0YsQ0FBQzthQUNIO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN2QjtTQUNGO2FBQU07WUFDTCxNQUFNLEdBQUcsR0FBRyxNQUFNLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUUvQixHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUU7Z0JBQ3JCLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDN0QsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztLQUNyRDtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN2QjtBQUNILENBQUM7QUFFRCxLQUFLLEdBQUcsRUFBRSxDQUFDIn0=