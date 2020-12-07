# actions.notify

A [GitHub Action](https://github.com/features/actions) to send a message to to IM（Lark(飞书), Slack, Telegram）. Inspired by [Slack Notify](https://github.com/marketplace/actions/slack-notify)

## **Screenshot**
### Lark (飞书)
![](https://cdn.jsdelivr.net/gh/echoings/un@l/assets/20201207094354.png)

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
      uses: echoings/actions.notify@v3
      with:
        plat_type: 'Lark'
        self_notify: 'false'
        notify_title: 'Project Updated'
        notify_message: 'Project updated, please check projects online status'
      env:
        NOTIFY_WEBHOOK: ${{ secrets.NOTIFY_WEBHOOK }}
        NOTIFY_SIGNKEY: ${{ secrets.NOTIFY_SIGNKEY }}
```

1. Create `NOTIFY_WEBHOOK` and `NOTIFY_SIGNKEY` secret using [GitHub Action's Secret](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository). And you can generate the value from the platform you are using.


## Advanced

> What if notify format is not suitable for your case?

Create a `.echo.actions.notify.js` file in your root project, which is export a async function definition as follow, and set `self_notify` to `true` then **You can handle notify yourself**

```javascript
module.exports = async function notify(
  _ctx: @actions/github & Something else,
  envs: process.env,
  axios: Axios,
  _core: @actions/core
): {
  code: number,
  msg: 'console message'
}
```

## Support
- [x] Lark (飞书)
- [ ] Slack
- [ ] Telegram

## Issues

Lark's signature cheking still has problem, and I don't know why yet. so try not to open signature checking.