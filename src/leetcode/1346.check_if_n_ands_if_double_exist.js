// https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/

var checkIfExist = function(arr) {
  const hashMap = {}
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i]
    const hash1 = arr[i] * 2
    const hash2 = arr[i] / 2
    if (hash1 in hashMap) return true
    if (hash2 in hashMap) return true
    hashMap[el] = i
  }
  return false
}

const sample1 = [7,1,14,11]

const res = checkIfExist(sample1) //?
