const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const solution = (len, startRow, startCol, endRow, endCol) => {
  const chessBoard = Array.from({ length: len }, () => new Array(len).fill(0));
  const queue = [[startRow, startCol, 0]];
  chessBoard[startRow][startCol] = 1;

  while (queue.length) {
    const [curRow, curCol, lvl] = queue.shift();
    if (curRow === endRow && curCol === endCol) {
      return lvl;
    }
    [
      [-2, -1],
      [-1, -2],
      [1, -2],
      [2, -1],
      [2, 1],
      [1, 2],
      [-2, 1],
      [-1, 2],
    ].forEach(([dr, dc]) => {
      if (
        dr + curRow < 0 ||
        dr + curRow >= len ||
        dc + curCol < 0 ||
        dc + curCol >= len ||
        chessBoard[dr + curRow][dc + curCol]
      ) {
        return;
      }
      queue.push([dr + curRow, dc + curCol, lvl + 1]);
      chessBoard[dr + curRow][dc + curCol] = 1;
    });
  }
  return null;
};

const answer = [];
for (let i = 0; i < input[0]; i++) {
  const len = +input[i * 3 + 1];
  const [startRow, startCol] = input[i * 3 + 2].split(' ').map(Number);
  const [endRow, endCol] = input[i * 3 + 3].split(' ').map(Number);
  answer.push(solution(len, startRow, startCol, endRow, endCol));
}
console.log(answer.join('\n'));
