// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/
var reverseString = function(s) {
  const l = s.length - 1
  const middle = Math.ceil(s.length / 2)

  for(let i = 0; i < middle; i++) {
    const swap = s[l-i]
    s[l-i] = s[i]
    s[i] = swap
  }
};

const s1  = ["h","e","l","l","o"]
const s2  = ["1","2","3"]

reverseString(s2)
s1 //?
s2
