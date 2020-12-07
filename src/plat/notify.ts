import { Context } from '@actions/github/lib/context'

export default abstract class Notify {
  signKey: string | undefined
  signature: string | undefined
  webhook: string
  options: any
  timestamp: string = new Date().getTime().toString()
  githubCtx: Context
  constructor(webhook: string, githubCtx: Context, signKey?: string) {
    this.webhook = webhook
    this.signKey = signKey
    this.githubCtx = githubCtx
    this.init(githubCtx)
  }

  init(ctx: Context = this.githubCtx) {
    this.timestamp = new Date().getTime().toString()

    if (this.signKey) {
      this.signature = this.genSin(this.signKey, this.timestamp)
    }
    const { ref, actor, workflow, eventName, sha, payload } = ctx
    const { commits = [], comment, repository } = payload

    const commitsContent: string[] = []
    commits.map((item: any) => commitsContent.push(item.message))
    const actionUrl = `${repository?.html_url}/commit/${sha}/checks/${workflow}`

    this.options = {
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
    }
    this.githubCtx = ctx
  }

  abstract notify(): any

  abstract genSin(signKey: string | undefined, timestamp: string): string
}

interface Res {
  code: number
  data: any
  msg: string
}

export { Context, Res }
