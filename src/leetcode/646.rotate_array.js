// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

const t1 = [1,2,3,4,5,6,7]

var dumb_rotate = function(nums, k) {
  for(let i = nums.length - k; i < nums.length; i++) {
    const el = nums.pop()
    nums.unshift(el)
  }
};
var rotate = function(nums, _k) {
  let k = _k
  if (k > nums.length) k = _k % nums.length
  nums.reverse()
  let leftP = k
  let rightP = nums.length - 1
  while(leftP < rightP) {
    const swap = nums[leftP]
    nums[leftP++] = nums[rightP]
    nums[rightP--] = swap
  }
  leftP = 0
  rightP = k - 1
  while(leftP < rightP) {
    const swap = nums[leftP]
    nums[leftP++] = nums[rightP]
    nums[rightP--] = swap
  }
};

rotate(t1, 3)
t1 //?
