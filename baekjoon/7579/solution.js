const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[N, M], memories, costs] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n')
  .map(line => line.split(' ').map(Number));

const MAX_COST = N * 100;
const dp = new Array(MAX_COST + 1).fill(0);

for (let i = 0; i < N; i++) {
  for (let j = MAX_COST; j >= costs[i]; j--) {
    dp[j] = Math.max(dp[j], dp[j - costs[i]] + memories[i]);
  }
}

let answer = MAX_COST;
for (let i = 0; i <= MAX_COST; i++) {
  if (dp[i] >= M) {
    answer = i;
    break;
  }
}

console.log(answer);
