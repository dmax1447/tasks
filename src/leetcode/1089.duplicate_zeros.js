// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

function duplicateZeros(arr) {
    const resultArr = []
    let j = 0;

    for(let i = 0; i < arr.length; i++) {
        const el = arr[i]
        if (el === 0) {
            arr.splice(i, 0, 0)
            arr.pop()
            i++
        }
    }

}

const arr = [1,0,2,3,0,4,5,0]
duplicateZeros(arr)
arr //?