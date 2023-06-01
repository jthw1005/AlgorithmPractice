const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const T = +input[0];

const answer = [];

for (let i = 0; i < T; i++) {
  answer.push(solution(+input[3 * i + 1], input[3 * i + 2], input[3 * i + 3]));
}

function solution(n, data1, data2) {
  let sticker = [];
  sticker[0] = data1.split(' ').map((x) => parseInt(x));
  sticker[1] = data2.split(' ').map((x) => parseInt(x));
  const dp = Array.from({ length: 2 }, () => new Array(n));

  dp[0][0] = sticker[0][0];
  dp[1][0] = sticker[1][0];
  dp[0][1] = dp[1][0] + sticker[0][1];
  dp[1][1] = dp[0][0] + sticker[1][1];

  for (let j = 2; j < n; j++) {
    dp[0][j] = Math.max(dp[1][j - 1], dp[1][j - 2]) + sticker[0][j];
    dp[1][j] = Math.max(dp[0][j - 1], dp[0][j - 2]) + sticker[1][j];
  }

  return Math.max(dp[0][n - 1], dp[1][n - 1]);
}

console.log(answer.join('\n'));
