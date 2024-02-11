// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/

var firstUniqChar = function(s) {
  const charsMap = {}
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (Object.hasOwn(charsMap, char)) {
      charsMap[char] = -1
    } else {
      charsMap[char] = i
    }
  }
  const entriesSorted = Object.entries(charsMap).filter(entry => entry[1] !== -1).sort((a, b) => a[1] > b[1])
  if (!entriesSorted.length) return -1
  return entriesSorted[0][1]
};

const s1 = 'leetcode'
const s2 = 'loveleetcode'
const s3 = 'aabb'
const s4 = "aadadaad" //

firstUniqChar(s4)
