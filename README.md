# actions.notify

A [GitHub Action](https://github.com/features/actions) to send a message to IM（Lark(飞书), Slack, Telegram). Inspired by [Slack Notify](https://github.com/marketplace/actions/slack-notify)

## **Screenshot**
### Lark (飞书)
![](https://cdn.jsdelivr.net/gh/echoings/un@l/assets/20210112152617.png)

## Usage

You can use this action after any other action. Here is an example setup of this action:

1. Create a `.github/workflows/notify.yml` file in your GitHub repo.
2. Add the following code to the `notify.yml` file.

```yml
on: push
name: IM Notification Demo
jobs:
  notification:
    name: IM Notification
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Notify to IM
      uses: echoings/actions.notify@v0.1.0
      with:
        plat_type: 'Lark'
        notify_title: 'Project Updated'
        notify_message: 'Project updated, please check projects online status'
      env:
        NOTIFY_WEBHOOK: ${{ secrets.NOTIFY_WEBHOOK }}
        NOTIFY_SIGNKEY: ${{ secrets.NOTIFY_SIGNKEY }}
        # for Lark use
        LARK_APP_ID: ${{ secrets.LARK_APP_ID }}
        LARK_APP_SECRET: ${{ secrets.LARK_APP_SECRET }}
```

3. Create `NOTIFY_WEBHOOK` and `NOTIFY_SIGNKEY` secret using [GitHub Action's Secret](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository). And you can generate the value from the platform you are using.

## Advanced

> What if notify format is not suitable for your case or your using platform isn't included?

Create a `.echo.actions.notify.js` file in your root project, and export an async function which's definition as follow, and set `plat_type` to `Custom` then **You can handle notify yourself**

```Typescript
module.exports = async function notify(
  options: {
    envs: process.env,
    ctx: github.context
  },
  utils: {
    axios: 'axios',
    core: '@actions/core',
    github: '@actions/github'
  }
): {
  code: number,
  data: any,
  msg: string
}
```
`Tips: ` If you need more extra dependency package, please do and use [ncc](https://github.com/vercel/ncc#readme) to bundle them together.

## For Lark
> what if you want to send a image as content?
1. use *enable_image* args, set it to
```yaml 
  enable=true
  url='local image path'
  title='use to alt image info'
```

2. you need to create your own business application to get app_id and app_secret, and set them as github secrect and env values:
```yaml
  LARK_APP_ID: app_id,
  LARK_APP_SECRET: app_secret
```
## Support
- [x] Lark (飞书)
- [ ] Slack
- [ ] Telegram

## Issues
+ Q: Lark's signature cheking still has problem, and I don't know why yet. so try not to open signature checking.
+ A: WIP
