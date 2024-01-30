// https://leetcode.com/problems/two-sum/
// функция должна вернуть индексы двух элементов из массива, которые в сумме дадут заданное число
// решить за 1 проход по массиву
const numbers = [1,6,9,13,26]

function twoSum(nums, target) {
    const hashTable = {}
    for (let idx = 0; idx < nums.length; idx++) {
        const el = nums[idx]
        hashTable[target - el] = idx
        if (hashTable[el]) {
            return [hashTable[el], idx]
        }
    }
    return new Error('no pair')
}

const indexes = twoSum(numbers, 15)

