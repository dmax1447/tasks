// https://leetcode.com/explore/featured/card/fun-with-arrays/523/conclusion/3228/



var heightChecker = function(heights =[]) {
  const heightsCorrect = heights.slice().sort((a, b) => a - b)
  let count = 0
  for (let i=0; i<heights.length; i++) {
    if (heightsCorrect[i] !== heights[i]) count += 1
  }
  return count
};

const sample = [1,1,4,2,1,3]
heightChecker(sample)
