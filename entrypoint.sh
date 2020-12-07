#!/bin/sh

ls -al

npm install

npm light-build

node ./dist/actions.notify.umd.js

echo 'done'