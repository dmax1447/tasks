// https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3260/
// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
// сдвинуть все нечетные вправо

var sortArrayByParity = function(nums) {
  let leftP = 0;
  let rightP = nums.length - 1
  const getNumParity = (num) => num % 2 === 0 ? 'even' : 'odd'

  while (rightP > leftP) {

    if (getNumParity(nums[leftP]) === 'even') {
      leftP += 1
      continue
    }
    if (getNumParity(nums[rightP]) === 'odd') {
      rightP -= 1
      continue
    }

    const swap = nums[leftP]
    nums[leftP] = nums[rightP]
    nums[rightP] = swap
  }
  return nums
};

const nums1 = [3,1,2,4]
sortArrayByParity(nums1) //?
nums1 //?
