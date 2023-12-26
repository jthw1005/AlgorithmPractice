const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

let max = 0;
input.forEach((el) => {
  if (el[1] > max) {
    max = el[1];
  }
});

let dp = Array.from({ length: max + 1 }, () => Array(max + 1).fill(0));

dp[0][0] = 1;
dp[1][0] = 1;
dp[1][1] = 1;

for (let i = 2; i <= max; i++) {
  for (let j = 0; j <= i; j++) {
    if (j == 0 || j == i) {
      dp[i][j] = 1;
    } else {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
  }
}

input.forEach((el) => {
  console.log(dp[el[1]][el[0]]);
});
