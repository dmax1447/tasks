// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
const nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

function getSortedSquares(nums) {
    return nums.map(v => v*v).sort((a, b) => a -b)
}

function getSortedSquares2(nums) {
    let squares = []
    const centerIdx = Math.floor(nums.length / 2) //?

    for(let i = 0; i <= centerIdx; i++) {
        if (i === centerIdx && !(centerIdx % 2)) {
            const centerEl = nums[i]
            squares = [Math.pow(centerEl, 2), ...squares]
            break
        } else {
            const leftEl = nums[i] //?
            const rightEl = nums[nums.length - 1 - i] //?
            squares = Math.abs(leftEl) < Math.abs(rightEl) ?
                [Math.pow(leftEl, 2), Math.pow(rightEl, 2), ...squares] :
                [Math.pow(rightEl, 2), Math.pow(leftEl, 2), ...squares]
        }
    }

    return squares
}

const result = getSortedSquares2(nums) //?