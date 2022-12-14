const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [n, m, k] = input.shift().split(' ').map(Number);

const countWrongBoard = (color) => {
  const dpArr = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  let eps = null;
  if (color === 'white') {
    eps = 0;
  } else if (color === 'black') {
    eps = 1;
  } else {
    return -1;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      const curPos = (i + j) % 2 === eps ? 'W' : 'B';
      const curVal = curPos === input[i - 1][j - 1] ? 0 : 1;
      dpArr[i][j] =
        dpArr[i - 1][j] + dpArr[i][j - 1] - dpArr[i - 1][j - 1] + curVal;
    }
  }

  let answer = Infinity;
  for (let i = k - 1; i < n; i++) {
    for (let j = k - 1; j < m; j++) {
      const totalSum =
        dpArr[i + 1][j + 1] -
        dpArr[i - k + 1][j + 1] -
        dpArr[i + 1][j - k + 1] +
        dpArr[i - k + 1][j - k + 1];
      answer = Math.min(answer, totalSum);
    }
  }

  return answer;
};

console.log(Math.min(countWrongBoard('white'), countWrongBoard('black')));
