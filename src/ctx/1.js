// В дощечке в один ряд вбиты гвоздики. Любые два гвоздика можно соединить ниточкой. Требуется соединить некоторые пары гвоздиков ниточками так, чтобы к каждому гвоздику была привязана хотя бы одна ниточка, а суммарная длина всех ниточек была минимальна.

//
// import * as readline from 'node:readline';
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
//
//
// const rows = []
// let rowIdx = 0
// const rowCount = 2
//
// function init(arr, length) {
//   console.log('arr', arr)
//   console.log('length', length)
// }
//
// rl.on('line', line => {
//   rows.push(line)
//   if (rowIdx === rowCount - 1) {
//     rl.close()
//     const length = Number(rows[0])
//     const arr = rows[1].split(' ').map(Number)
//     init(arr, length)
//   }
//   rowIdx++
// });

const length = 6
const arr = [5, 0, 1]

function findMinTotalLength(_arr) {
  const arr = [...new Set(_arr.sort((a, b) => a - b))]
  let max = 0
  let total = 0
  for (let i = 1; i < arr.length; i++) {
    const distance = arr[i] - arr[i-1]
    if (max < distance) max = distance
    total += distance
  }
  return arr.length === 3 ? total :total - max
}

findMinTotalLength(arr) //?


