import * as readline from 'readline'
const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

let arr = []
let count = 0

rl.on('line', line => {
  count = Number(line)
  console.log(a + b);
  rl.close();
});
rl.on('line', line => {
  const arr = line.split(' ').map(Number);
   console.log(a + b);
   rl.close();
});



function countMinDist(count, arr) {
  arr.sort((a, b) => a - b) //?
  const connections = []
  let maxDist = 0
  let maxDistIdx = 0

  for (let i = 1; i < arr.length; i++) {
    const dist = arr[i] - arr[i-1]
    if (i === 1) maxDist = dist
    if (dist >= maxDist) {
      maxDist = dist
      connections.push(dist)
    } else {
      connections.unshift(dist)
    }
  }
  return connections.slice(0, count - 2).reduce((acc, item) => {
    return acc + item
  }, 0)
}

countMinDist(count, arr) //?


