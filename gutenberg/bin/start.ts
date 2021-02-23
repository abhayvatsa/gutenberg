#!/usr/bin/env node
import path from 'path'
import { spawn } from 'child_process'
const dir = path.resolve(__dirname, '..')
console.log(dir)
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