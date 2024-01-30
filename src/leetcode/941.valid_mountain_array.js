// https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3251/


var validMountainArray = function(arr) {
  if (arr.length < 3) return false
  let state = 'inc'
  let hasPeak = false
  for (let i = 1; i < arr.length; i++) {
    if (state === 'inc' && arr[i] > arr[i-1]) continue
    if (state === 'inc' && arr[i] < arr[i-1]) {
      state = 'dec'
      hasPeak = true
      continue
    }
    if (state === 'dec' && arr[i] < arr[i-1]) continue
    return false
  }
  return hasPeak
};

const arr = [0, 2, 3, 3, 5, 2, 1, 0]

const res = validMountainArray(arr) //?
