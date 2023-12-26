const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const N = +input[0];
const house = input.slice(1).map(line => line.split(' ').map(Number));

const dp = Array.from({ length: N }, () => Array.from({ length: N }, () => new Array(3).fill(0)));

dp[0][1][0] = 1;

for (let x = 0; x < N; x++) {
  for (let y = 2; y < N; y++) {
    if (house[x][y] === 0) {
      if (y) dp[x][y][0] = dp[x][y - 1][0] + dp[x][y - 1][2];
      if (x) dp[x][y][1] = dp[x - 1][y][1] + dp[x - 1][y][2];
      if (x && y && house[x - 1][y] === 0 && house[x][y - 1] === 0) {
        dp[x][y][2] = dp[x - 1][y - 1][0] + dp[x - 1][y - 1][1] + dp[x - 1][y - 1][2];
      }
    }
  }
}

console.log(dp[N - 1][N - 1].reduce((a, b) => a + b));
