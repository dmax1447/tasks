// https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3574/

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

var sortedSquares = function(nums) {
  let leftP = 0;
  let rightP = nums.length - 1
  let sortedIdx = nums.length - 1
  let sorted = Array(nums.length)
  while (leftP <= rightP) {
    if (Math.abs(nums[rightP]) > Math.abs(nums[leftP])) {
      sorted[sortedIdx--] = nums[rightP--] ** 2
    } else {
      sorted[sortedIdx--] = nums[leftP++] ** 2
    }
  }
  return sorted
};
const a = 4
let s = a ** 2
const nums = [-4,-1,0,3,10]
const res = sortedSquares(nums)
