// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

var plusOne = function(digits) {
  let rightP = digits.length - 1
  let rest = 1

  while (rightP >= 0) {
    rest = (digits[rightP] + rest) % 10
    digits[rightP] = rest
    if (rest > 0) break
    rightP -=1
    rest = 1
    if (rightP === -1) digits.unshift(1)
  }
  return digits
};

const digits = [8,9,9]

plusOne(digits) //?
