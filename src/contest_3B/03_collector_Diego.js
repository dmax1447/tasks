function findIdxLessThenTarget(arr, target, start, end) {
  const subsequenceLength = (end - start) + 1
  const middle = start + Math.floor((end - start) / 2)
  if (subsequenceLength <= 3) {
    if (arr[end] <= target) return end
    if (arr[middle] <= target) return middle
    if (arr[start] <= target) return start
    return null
  }

  if (target >= arr[middle]) {
    return findIdxLessThenTarget(arr, target, middle, end)

  } else {
    return findIdxLessThenTarget(arr, target, start, middle)
  }
}

function count(num, arr) {
  if (arr.length === 0) return 0
  if (arr.length === 1) return arr[0] < num ? 1 : 0
  const idx = findIdxLessThenTarget(arr, num, 0, arr.length - 1)
  return idx === null ? 0 : idx + 1
}
function calc({N, stickers, K, stickerMaximums}) {
  const diegoCards = [...new Set(stickers.map(Number).sort((a, b) => a - b))]
  stickerMaximums.forEach((max) => {
    console.log(count(max, diegoCards))
  })
}


process.stdin.resume();
process.stdin.setEncoding('utf8');
let rawStr = ''
process.stdin.on('data', data => {
  rawStr += data.toString()
});
process.on('exit', (code) => {
  const [N, stickersRaw, K,  stickerMaximumsRaw] = rawStr.split('\n')
  calc({N, stickers: stickersRaw.split(' '), K, stickerMaximums: stickerMaximumsRaw.split(' ')})
});

// const arr = [178]
// const res = count(178, arr) //?


