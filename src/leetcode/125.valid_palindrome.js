// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/

var isPalindrome = function(s) {
  const str = s.replaceAll(/[\W_]/g, '').toLowerCase()
  let lefP = 0;
  let rightP = str.length - 1
  while (lefP < rightP) {
    if (str[lefP++] !== str[rightP--]) return false
  }
  return true
};


const s1 = "A man, a plan, a canal: Panama"

isPalindrome(s1)
