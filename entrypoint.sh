#!/bin/sh

npm install

npm run build

node ./dist/actions.notify.umd.js

echo 'done'