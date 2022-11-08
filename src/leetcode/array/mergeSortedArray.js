// https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3253/

/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 * Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
 * The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
 */

const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

function merge(nums1, _m, nums2, _n) {
    let sum1pointer = _m - 1
    let sum2pointer = _n - 1

    do {
        let nums1el = nums1[sum1pointer] //?
        let nums2el = nums2[sum2pointer] //?
        let rightPointer = sum1pointer + sum2pointer + 1

        if (nums1el > nums2el) {
            nums1[rightPointer] = nums1el
            if (sum1pointer) {
                sum1pointer--
            } else {
                sum2pointer--
            }


        } else {
            nums1[rightPointer] = nums2el
            if (sum2pointer) {
                sum2pointer--
            } else {
                sum1pointer--
            }
        }
    } while (sum1pointer + sum2pointer >= 0)
}

merge(nums1, m, nums2, n)
nums1 //?