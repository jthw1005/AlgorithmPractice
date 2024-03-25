const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const N = parseInt(input[0], 10);
const W = Array.from({ length: N }, (_, i) => input[i + 1].split(' ').map(Number));

const MAX = 1000000000;
const dp = Array.from({ length: N }, () => Array(1 << N).fill(-1));

function find(curr, visited) {
  if (visited === (1 << N) - 1) {
    if (W[curr][0] !== 0) return W[curr][0];
    return MAX;
  }

  if (dp[curr][visited] !== -1) return dp[curr][visited];

  dp[curr][visited] = MAX;
  for (let next = 0; next < N; next++) {
    if (visited & (1 << next) || W[curr][next] === 0) continue;
    dp[curr][visited] = Math.min(dp[curr][visited], find(next, visited | (1 << next)) + W[curr][next]);
  }

  return dp[curr][visited];
}

console.log(find(0, 1));
