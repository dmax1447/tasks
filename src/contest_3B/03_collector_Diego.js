// function calc({N, stickers, K, stickerMaximums}) {
//   console.log({N, stickers, K, stickerMaximums})
//
//   const diegoCards = [...new Set(stickers.map(Number).sort((a, b) => a - b))]
//   console.log(diegoCards)
// }
//
// //
// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// let rawStr = ''
// process.stdin.on('data', data => {
//   rawStr += data.toString()
// });
// process.on('exit', (code) => {
//   const [N, stickersRaw, K,  stickerMaximumsRaw] = rawStr.split('\n')
//   calc({N, stickers: stickersRaw.split(' '), K, stickerMaximums: stickerMaximumsRaw.split(' ')})
// });

const arr = [1, 3, 5, 8, 23, 42, 50, 56, 71, 98, 100, 198, 300]
const arr2 = [1, 4]
const arr3 = [1, 50, 100]
let iter = 0
function findIdxLessThenTarget(arr, target, start, end) {
  const subsequenceLength = (end - start) + 1
  if (subsequenceLength === 2) {

    return target > arr[start] ? start : end
  }
  const middle = start + Math.floor((end - start) / 2)
  if (target > arr[middle]) {
    return findIdxLessThenTarget(arr, target, middle, end)
  } else {
    return findIdxLessThenTarget(arr, target, start, middle)
  }
}

const idx = findIdxLessThenTarget(arr, 75, 0, arr.length - 1) //?
arr.slice(0, idx) //?
