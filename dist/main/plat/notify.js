"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
const context_1 = require("@actions/github/lib/context");
Object.defineProperty(exports, "Context", { enumerable: true, get: function () { return context_1.Context; } });
class Notify {
    constructor(webhook, githubCtx, options) {
        this.timestamp = new Date().getTime().toString();
        this.webhook = webhook;
        this.githubCtx = githubCtx;
        this.options = options;
        this.signKey = options.signKey;
        this.init(githubCtx);
    }
    init(ctx = this.githubCtx) {
        this.timestamp = new Date().getTime().toString();
        if (this.signKey) {
            this.signature = this.genSin(this.signKey, this.timestamp);
        }
        const { ref, actor, workflow, eventName, sha, payload } = ctx;
        const { commits = [], comment, repository } = payload;
        const commitsContent = [];
        commits.map((item) => commitsContent.push(item.message));
        const actionUrl = `${repository === null || repository === void 0 ? void 0 : repository.html_url}/commit/${sha}/checks/${workflow}`;
        this.ctxFormatContent = {
            ref,
            actor,
            workflow,
            eventName,
            sha,
            payload,
            comment,
            commitsContent: commitsContent.join('\n'),
            actionUrl,
            repository,
        };
        this.githubCtx = ctx;
    }
}
exports.default = Notify;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BsYXQvbm90aWZ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlEQUFxRDtBQXlENUMsd0ZBekRBLGlCQUFPLE9BeURBO0FBdkRoQixNQUE4QixNQUFNO0lBUWxDLFlBQVksT0FBZSxFQUFFLFNBQWtCLEVBQUUsT0FBWTtRQUY3RCxjQUFTLEdBQVcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUdqRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQTtRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUE7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN0QixDQUFDO0lBRUQsSUFBSSxDQUFDLE1BQWUsSUFBSSxDQUFDLFNBQVM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBRWhELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7U0FDM0Q7UUFDRCxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUE7UUFDN0QsTUFBTSxFQUFFLE9BQU8sR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLE9BQU8sQ0FBQTtRQUVyRCxNQUFNLGNBQWMsR0FBYSxFQUFFLENBQUE7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUM3RCxNQUFNLFNBQVMsR0FBRyxHQUFHLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxRQUFRLFdBQVcsR0FBRyxXQUFXLFFBQVEsRUFBRSxDQUFBO1FBRTVFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRztZQUN0QixHQUFHO1lBQ0gsS0FBSztZQUNMLFFBQVE7WUFDUixTQUFTO1lBQ1QsR0FBRztZQUNILE9BQU87WUFDUCxPQUFPO1lBQ1AsY0FBYyxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3pDLFNBQVM7WUFDVCxVQUFVO1NBQ1gsQ0FBQTtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBO0lBQ3RCLENBQUM7Q0FLRjtBQS9DRCx5QkErQ0MifQ==