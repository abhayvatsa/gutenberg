#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var child_process_1 = require("child_process");
var dir = path_1.default.resolve(__dirname, '..') + '/gutenberg/';
console.log(dir);
var build = child_process_1.spawn('./node_modules/.bin/next', ['build', dir]);
build.stdout.on('data', function (data) {
    console.log(data.toString());
});
build.stderr.on('data', function (data) {
    console.log(data.toString());
});
build.on('exit', function (code) {
    console.log("child process exited with code " + code.toString());
});
/*
const dev = spawn('./node_modules/.bin/next', ['start', dir])

dev.stdout.on('data', function (data) {
  console.log(data.toString())
})

dev.stderr.on('data', function (data) {
  console.log(data.toString())
})

dev.on('exit', function (code) {
  console.log(`child process exited with code ${code.toString()}`)
})
*/
