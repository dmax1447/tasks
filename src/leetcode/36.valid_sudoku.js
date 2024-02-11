const board1 =
  [["5","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]]

const board2 =
  [["8","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]]

const board3 =
  [["5","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,["3","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]]
const isValidLine = (line) => {
  const clearLine = line.filter(v => v !== '.')
  const digitsSet = new Set(clearLine)
  return digitsSet.size === clearLine.length
}
const isVaildSquare = (startX, startY, board) => {
  const line = []
  const endX = startX + 3 //?
  const endY = startY + 3 //?
  for(let i = startX; i < endX; i++) {
    for(let j = startY; j < endY; j++) {
      line.push(board[i][j])
    }
  }
  return isValidLine(line)
}

var isValidSudoku = function(board) {
  for (let i = 0; i < board.length; i++) {
    const row = board[i]
    if (!isValidLine(board[i])) return false
  }
  for (let i = 0; i < board.length; i++) {
    const column = []
    for(let j = 0; j < 9; j++) {
      column.push(board[j][i])
    }
    if (!isValidLine(column)) return false
  }

  for (let i = 0; i <= 6; i += 3) {
    for(let j = 0; j <= 6; j +=3) {
      if(!isVaildSquare(i, j, board)) return false
    }
  }
  return true
};


isValidSudoku(board3) //?
