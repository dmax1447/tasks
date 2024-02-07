// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/770/


function transpose(matrix) {
  const n = matrix[0].length - 1
  for(let i = 0; i <= n; i++) {
    for(let j = i; j <=n; j++) {
      const swap = matrix[j][i]
      matrix[j][i] = matrix[i][j]
      matrix[i][j] = swap
    }
  }
}

function swapColumns(matrix) {
  matrix.forEach(row => row.reverse())
}



var rotate = function(matrix) {
  transpose(matrix)
  swapColumns(matrix)
};

const m1 =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
] // [[7,4,1],[8,5,2],[9,6,3]]
const m2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]] // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]


rotate(m2)
m2
