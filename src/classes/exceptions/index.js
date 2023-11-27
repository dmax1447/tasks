import File from './File.js'
import fs from 'fs'

const file = new File('./task.md')
const result = file.read() //?
console.log(result)
// fs.readFileSync('./task.md')
