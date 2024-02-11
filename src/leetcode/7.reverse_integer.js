// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/

var reverse = function(x) {
  const isNegative = x < 0
  const str = new String(Math.abs(x))
  let reversed = str.split('').reverse().join('')
  const num = parseInt(reversed, 10)
  if (Math.abs(num) > (2 ** 31 - 1)) return 0
  return isNegative ? -num : num
};

const n1 = 123

reverse(-199999916521662161213212)

let x = '123'

a = -x
