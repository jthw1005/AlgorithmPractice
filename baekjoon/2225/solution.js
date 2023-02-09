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
    for (let m = 0; m <= i; m++) {
      dpArr[i][j] += dpArr[m][j - 1] % 1000000000;
    }
    dpArr[i][j] -= 1;
  }
}

console.log(dpArr[n][k] % 1000000000);
