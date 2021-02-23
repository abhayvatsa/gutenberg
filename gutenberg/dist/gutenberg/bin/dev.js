#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dir = require('path').resolve(__dirname, '..');
var spawn = require('child_process').spawn, dev = spawn("./node_modules/.bin/next", ['dev', dir]);
dev.stdout.on('data', function (data) {
    console.log(data.toString());
});
dev.stderr.on('data', function (data) {
    console.log(data.toString());
});
dev.on('exit', function (code) {
    console.log("child process exited with code " + code.toString());
});
