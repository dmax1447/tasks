// https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3259/
// Given an array arr, replace every element in that array with the greatest element among the elements to its right,
// and replace the last element with -1.
// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]


var replaceElements = function(arr) {
  let max = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    const curr = arr[i];
    arr[i] = max;
    max = Math.max(max, curr);
  }

  return arr;
};

const sample = [17,18,5,4,6,1]
const res = replaceElements(sample) //?
// [18,6,6,6,1,-1]

const sample2 = [23727,37383,95658,71922,31756]
const res2 = replaceElements(sample2) //?
// [95658,95658,71922,31756,-1]

