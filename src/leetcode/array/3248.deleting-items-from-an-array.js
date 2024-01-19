// https://leetcode.com/explore/learn/card/fun-with-arrays/526/deleting-items-from-an-array/3248/

var removeDuplicatesOld = function(nums) {
  let uniqueCharIdx = 0
  let currentUniqueChar = nums[0]
  for(let i = 1; i < nums.length; i++) {
    // if (nums[i] === '_') break
    if (nums[i] === currentUniqueChar) {
      nums[i] = '_'
      continue
    }

    if (i === uniqueCharIdx +1) {
      continue
    }
    uniqueCharIdx +=1
    if (i === nums.length -1) {

    }
    nums[uniqueCharIdx] = nums[i]
    currentUniqueChar = nums[i]
    nums[i] = '_'


  }
  return uniqueCharIdx + 1
};
var removeDuplicates = function(nums) {
  let replaceIdx = 1
  let currentChar = nums[0]
  for(let i = 1; i < nums.length; i++) {
    if (nums[i] === currentChar) {
      continue
    }
    if (nums[i] !== currentChar ) {
      nums[replaceIdx] = nums[i]
      currentChar = nums[i]
      replaceIdx += 1
    }
  }
  return replaceIdx
};

const arr1 = [1,1,2]
const res1 = removeDuplicates(arr1) //?
arr1 //?

const arr2 = [ 1, 1, 1, 2, 2, 3, 3, 4]
const res2 = removeDuplicates(arr2) //?
arr2    //?
//
const arr3 = [1,2]
const res3 = removeDuplicates(arr3) //?
arr3 //?
//
const arr4 = [1, 2, 2]
const res4 = removeDuplicates(arr4) //?
arr4 //?

const arr5 = [1, 2, 3]
const res5 = removeDuplicates(arr5) //?
arr5 //?
