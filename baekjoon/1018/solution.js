const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [height, width] = n.split(' ');
const BOARD_SIZE = 8;

const calWrongBoardNum = (arr, x, y) => {
  let cntBlackFirst = 0;
  let cntWhiteFirst = 0;
  for (let i = x; i < x + BOARD_SIZE; i++) {
    for (let j = y; j < y + BOARD_SIZE; j++) {
      if (((i + j) % 2 === 0 && arr[j][i] !== 'B') || ((i + j) % 2 !== 0 && arr[j][i] !== 'W')) {
        cntBlackFirst++;
      }
      if (((i + j) % 2 === 0 && arr[j][i] !== 'W') || ((i + j) % 2 !== 0 && arr[j][i] !== 'B')) {
        cntWhiteFirst++;
      }
    }
  }
  return Math.min(cntBlackFirst, cntWhiteFirst);
};

const candidates = [];
for (let i = 0; i <= width - BOARD_SIZE; i++) {
  for (let j = 0; j <= height - BOARD_SIZE; j++) {
    candidates.push(calWrongBoardNum(input, i, j));
  }
}
console.log(Math.min(...candidates));
