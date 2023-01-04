const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const [n, w] = input.shift();
const dpTable = Array.from({ length: n + 1 }, () => new Array(w + 1).fill(0));
let answer = 0;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= w; j++) {
    if (j >= input[i - 1][0]) {
      dpTable[i][j] = Math.max(
        dpTable[i - 1][j],
        dpTable[i - 1][j - input[i - 1][0]] + input[i - 1][1]
      );
    } else {
      dpTable[i][j] = dpTable[i - 1][j];
    }
    if (answer < dpTable[i][j]) {
      answer = dpTable[i][j];
    }
  }
}

console.table(answer);
