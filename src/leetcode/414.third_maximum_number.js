// https://leetcode.com/explore/featured/card/fun-with-arrays/523/conclusion/3231/
const nums1 = [2,2,3,1]
const nums2 = [1,2,2,5,3,5]
var thirdMax = function(nums) {
  const maximum = []
  maximum[0] = nums[0]

  for(let i = 1; i < nums.length; i++) {
    const current = nums[i]
    if (maximum.includes(current)) continue
    const position = maximum.findIndex(max => max < current)
    const startIdx = position === -1 ? maximum.length :position
    maximum.splice(startIdx, 0, current)
    if (maximum.length > 3) maximum.length = 3
    maximum
  }
  return maximum.length === 3 ? maximum[2] : maximum[0]
};


thirdMax(nums2) //?


var thirdMaxV2 = function(nums) {
  const maximum = []
  maximum[0] = nums[0]

  for(let i = 1; i < nums.length; i++) {
    const current = nums[i]
    if (maximum.includes(current)) continue
    const position = maximum.findIndex(max => max < current)
    const startIdx = position === -1 ? maximum.length :position
    maximum.splice(startIdx, 0, current)
    if (maximum.length > 3) maximum.length = 3
    maximum
  }
  return maximum.length === 3 ? maximum[2] : maximum[0]
};
