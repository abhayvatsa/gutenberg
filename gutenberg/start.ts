#!/usr/bin/env node
import path from 'path'
import { spawn } from 'child_process'
const dir = path.resolve(__dirname, '..') + '/gutenberg/'
console.log(dir)

const build = spawn('./node_modules/.bin/next', ['build', dir])

build.stdout.on('data', function (data) {
  console.log(data.toString())
})

build.stderr.on('data', function (data) {
  console.log(data.toString())
})

build.on('exit', function (code) {
  console.log(`child process exited with code ${code.toString()}`)
})

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
