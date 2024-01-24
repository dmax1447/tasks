// https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3157/
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

var moveZeroes = function(nums) {
  let zeroIdx = 0;

  for (let readIdx = 0; readIdx < nums.length ; readIdx++) {
    if (nums[readIdx] !== 0) {
      nums[zeroIdx++] = nums[readIdx]
      nums[readIdx] = 0
    }
  }
  // while (zeroIdx < nums.length) {
  //   nums[zeroIdx++] = 0
  // }
}

const sample = [0,1,2,0,0,0,0,3,12]
// moveZeroes(sample)
sample //?

const sample2 = [0,1,0,4,2,3,0]
// moveZeroes(sample2)
sample2 //?

const sample3 = [1, 0]
// moveZeroes(sample3)
sample3 //?

const moveZeroes2 = function (nums) {
  let leftP = 0
  let rightP = 1

  while (rightP < nums.length) {
    if (nums[leftP] !== 0) {
      leftP +=1
      rightP +=1
      continue
    }

    if (nums[rightP] === 0) {
      rightP +=1
    }
    if (nums[rightP] !== 0) {
      nums[leftP] = nums[rightP]
      nums[rightP] = 0
    }
  }
}

// const sample = [0,1,0,3,12]
const s1 = [1, 0, 0, 3, 12]
const s2 = [0, 1, 0, 3, 12]


moveZeroes2(s1)
s1 //?
