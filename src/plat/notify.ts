import { Context } from '@actions/github/lib/context';

export default abstract class Notify {
  webhook: string;
  ctxFormatContent: any;
  inputs: any;
  githubCtx: Context;
  constructor(webhook: string, githubCtx: Context, inputs: any) {
    this.webhook = webhook;
    this.githubCtx = githubCtx;
    this.inputs = inputs;
    this.init(githubCtx);
  }

  init(ctx: Context = this.githubCtx) {
    const { ref, actor, workflow, eventName, sha, payload } = ctx;
    const { commits = [], comment, repository } = payload;

    const commitsContent: string[] = [];
    commits.map((item: any) => commitsContent.push(item.message));
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

  abstract notify(): any;
  abstract notifyFailure(): any;
}

interface Res {
  code: number;
  data: any;
  msg: string;
}

export { Context, Res };
