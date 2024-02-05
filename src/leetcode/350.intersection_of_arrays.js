// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/

// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

const nums1 = [4,9,5]
const nums2 = [9,4,9,8,4]

var intersect = function(nums1, nums2) {
  const hashTable = {}
  const result = []

  nums1.forEach((el) => {
    if (!hashTable[el]) {
      hashTable[el] = 1
    } else {
      hashTable[el] +=1
    }
  })

  nums2.forEach((el) => {
    if (hashTable[el]) {
      result.push(el)
      hashTable[el] -=1
    }
  })

  return result
};

const t1 = [1,2,2,1]
const t2 = [2,2]

intersect(nums1, nums2) //?
intersect(t1, t2) //?
