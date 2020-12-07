#!/bin/sh

npm install

npm run light-build

node ./dist/actions.notify.umd.js

echo 'done'