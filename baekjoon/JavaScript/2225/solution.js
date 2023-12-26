const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, k] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const dpArr = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(1));

for (let i = 1; i <= n; i++) {
  for (let j = 2; j <= k; j++) {
    dpArr[i][j] = (dpArr[i - 1][j] + dpArr[i][j - 1]) % 1000000000;
  }
}

console.log(dpArr[n][k]);
