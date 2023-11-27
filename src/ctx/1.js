import * as readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



const rows = []
let rowIdx = 0
const rowCount = 2

function init(arr, length) {
  console.log('arr', arr)
  console.log('length', length)
}

rl.on('line', line => {
  rows.push(line)
  if (rowIdx === rowCount - 1) {
    rl.close()
    const length = Number(rows[0])
    const arr = rows[1].split(' ').map(Number)
    init(arr, length)
  }
  rowIdx++
});






