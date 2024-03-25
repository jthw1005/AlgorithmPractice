const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const n = +input.shift();

function solution(n, costs) {
  let resultArr = [];
  for (let i = 0; i < 3; i++) {
    const dp = Array.from({ length: n }, () => new Array(3).fill(Infinity));
    dp[0][i] = costs[0][i];
    for (let j = 1; j < n; j++) {
      for (let k = 0; k < 3; k++) {
        dp[j][k] =
          costs[j][k] +
          Math.min(dp[j - 1][(k + 1) % 3], dp[j - 1][(k + 2) % 3]);
      }
    }
    resultArr.push(Math.min(...dp[n - 1].filter((el, idx) => idx !== i)));
  }
  const answer = Math.min(...resultArr);
  return answer;
}

const costs = input.map((v) => v.split(' ').map(Number));
const answer = solution(n, costs);
console.log(answer);

/**
 * 첫 번째 집과 마지막 집을 고정시키면 RGB거리 문제와 동일해진다.
 */
