//https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/578/
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Input: nums = [1,2,3,1]
// Output: true

var containsDuplicate = function(nums) {
  const hashTable = {}

  for(let i = 0; i < nums.length; i++) {
    const el = nums[i]
    if (hashTable[el]) return true
    hashTable[el] = 1
  }
  return false
};
