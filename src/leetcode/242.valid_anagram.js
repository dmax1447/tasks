// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  const charMap = {}
  for(let i = 0; i < s.length; i++) {
    const char = s[i]
    if (!charMap[char]) charMap[char] = 0
    charMap[char] += 1
  }
  charMap
  for(let i = 0; i < t.length; i++) {
    const char = t[i]
    if (!charMap[char]) return false
    if (charMap[char] === 1) {
      delete charMap[char]
    } else {
      charMap[char] -= 1
    }
  }
  return Object.keys(charMap).length === 0
};

const s = "anagram"
const t = "nagaradm"

isAnagram(s, t)
