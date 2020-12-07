# actions.notify

A [GitHub Action](https://github.com/features/actions) to send a message to to IM（Lark（飞书），Slack，Telegram）channel.

## **Screenshot**
### Lark（飞书）
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
      uses: echoings/actions.notify@v1
      with:
        NOTIFY_TYPE: 'lark'
        NOTIFY_WEBHOOK: ${{ secrets.NOTIFY_WEBHOOK }}
        NOTIFY_SIGNKEY: ${{ secrets.NOTIFY_SIGNKEY }}
```

1. Create `NOTIFY_WEBHOOK` and `NOTIFY_SIGNKEY` secret using [GitHub Action's Secret](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository). And you can generate the value from the platform you are using.


## Support
- [x] Lark
- [ ] Slack
- [ ] Telegram
