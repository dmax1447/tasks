// https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3270/

const nums = [4,3,2,7,8,2,3,1]

// Output: [5,6]
const nums2 = [1, 1, 1]
var findDisappearedNumbers = function(nums) {
  let hitCount = 0
  for(let i = 0; i < nums.length; i++) {
    const idx = Math.abs(nums[i]) - 1
    nums[idx] = 0 - Math.abs(nums[idx])
  }
  let result = []
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) result.push(i+1)
    hitCount -=1
    if (hitCount === 0) break
  }
  return result
};

findDisappearedNumbers(nums)

Math.abs(-5)
