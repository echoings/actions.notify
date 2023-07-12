import { Context } from '@actions/github/lib/context';
export default class Notify {
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
        const actionUrl = `${repository?.html_url}/commit/${sha}/checks/${workflow}`;
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
export { Context };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BsYXQvbm90aWZ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RCxNQUFNLENBQUMsT0FBTyxPQUFnQixNQUFNO0lBS2xDLFlBQVksT0FBZSxFQUFFLFNBQWtCLEVBQUUsTUFBVztRQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLENBQUMsTUFBZSxJQUFJLENBQUMsU0FBUztRQUNoQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDOUQsTUFBTSxFQUFFLE9BQU8sR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUV0RCxNQUFNLGNBQWMsR0FBYSxFQUFFLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM5RCxNQUFNLFNBQVMsR0FBRyxHQUFHLFVBQVUsRUFBRSxRQUFRLFdBQVcsR0FBRyxXQUFXLFFBQVEsRUFBRSxDQUFDO1FBRTdFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRztZQUN0QixHQUFHO1lBQ0gsS0FBSztZQUNMLFFBQVE7WUFDUixTQUFTO1lBQ1QsR0FBRztZQUNILE9BQU87WUFDUCxPQUFPO1lBQ1AsY0FBYyxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3pDLFNBQVM7WUFDVCxVQUFVO1NBQ1gsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7Q0FJRjtBQVFELE9BQU8sRUFBRSxPQUFPLEVBQU8sQ0FBQyJ9