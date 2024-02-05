// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function(nums) {
  const hashTable = {}

  for(let i = 0; i < nums.length; i++) {
    const el = nums[i]
    if (!hashTable[el]) {
      hashTable[el] = 1
    } else {
      delete hashTable[el]
    }
  }
  return Object.keys(hashTable)[0]
};
