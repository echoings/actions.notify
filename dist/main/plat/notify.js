"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
const context_1 = require("@actions/github/lib/context");
Object.defineProperty(exports, "Context", { enumerable: true, get: function () { return context_1.Context; } });
class Notify {
    constructor(webhook, githubCtx, inputs) {
        this.webhook = webhook;
        this.githubCtx = githubCtx;
        this.inputs = inputs;
        this.init(githubCtx);
    }
    init(ctx = this.githubCtx) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BsYXQvbm90aWZ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlEQUFzRDtBQStDN0Msd0ZBL0NBLGlCQUFPLE9BK0NBO0FBN0NoQixNQUE4QixNQUFNO0lBS2xDLFlBQVksT0FBZSxFQUFFLFNBQWtCLEVBQUUsTUFBVztRQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLENBQUMsTUFBZSxJQUFJLENBQUMsU0FBUztRQUNoQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDOUQsTUFBTSxFQUFFLE9BQU8sR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUV0RCxNQUFNLGNBQWMsR0FBYSxFQUFFLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM5RCxNQUFNLFNBQVMsR0FBRyxHQUFHLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxRQUFRLFdBQVcsR0FBRyxXQUFXLFFBQVEsRUFBRSxDQUFDO1FBRTdFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRztZQUN0QixHQUFHO1lBQ0gsS0FBSztZQUNMLFFBQVE7WUFDUixTQUFTO1lBQ1QsR0FBRztZQUNILE9BQU87WUFDUCxPQUFPO1lBQ1AsY0FBYyxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3pDLFNBQVM7WUFDVCxVQUFVO1NBQ1gsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7Q0FJRjtBQXJDRCx5QkFxQ0MifQ==