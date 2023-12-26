function calc(k, str) {
  let best = 0
  for(let charCode = 97; charCode <= 122; charCode++) {
    const char = String.fromCharCode(charCode)
    const currentMax = findMaxStrForChar(k, str, char)
    if (currentMax > best) best = currentMax
  }
  console.log(best)
}

function findMaxStrForChar(k, str, char) {
  let L = 0;
  let R = 0;
  let repCount = k
  let max = 0
  let length = 0

  while (R < str.length) {
    if (str[R] === char) {
      R += 1
      length += 1
      if (length > max) max = length
      continue
    } else if (repCount > 0) {
      repCount -= 1
      R += 1
      length += 1
      if (length > max) max = length
      continue
    }
    while (L <= R && repCount === 0) {
      if (str[L] !== char) {
        repCount += 1
      }
      L += 1
      length -= 1
    }

  }
  return max
}
//
process.stdin.resume();
process.stdin.setEncoding('utf8');
let rawStr = ''
process.stdin.on('data', data => {
  rawStr += data.toString()
});
process.on('exit', (code) => {
  const [k, str] = rawStr.split('\n')
  calc(k, str)
});



