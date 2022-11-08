// Given an array nums of integers, return how many of them contain an even number of digits.

const nums = [12,345,2,6,7896]
let counter = 0

nums.forEach(num => {
    if(num.toString().length % 2 === 0) {
        counter += 1;
    }
})
