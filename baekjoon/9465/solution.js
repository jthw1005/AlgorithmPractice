const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim();

function solution(input) {
  let inputLines = input.split('\n');
  let T = parseInt(inputLines.shift());

  for (let i = 0; i < T; i++) {
    let n = parseInt(inputLines.shift());
    let sticker = [];

    sticker[0] = inputLines
      .shift()
      .split(' ')
      .map((x) => parseInt(x));
    sticker[1] = inputLines
      .shift()
      .split(' ')
      .map((x) => parseInt(x));

    let dp = new Array(2);
    dp[0] = new Array(n);
    dp[1] = new Array(n);

    dp[0][0] = sticker[0][0];
    dp[1][0] = sticker[1][0];

    for (let j = 1; j < n; j++) {
      if (j === 1) {
        dp[0][j] = dp[1][0] + sticker[0][j];
        dp[1][j] = dp[0][0] + sticker[1][j];
      } else {
        dp[0][j] = Math.max(dp[1][j - 1], dp[1][j - 2]) + sticker[0][j];
        dp[1][j] = Math.max(dp[0][j - 1], dp[0][j - 2]) + sticker[1][j];
      }
    }

    console.log(Math.max(dp[0][n - 1], dp[1][n - 1]));
  }
}

solution(input);
