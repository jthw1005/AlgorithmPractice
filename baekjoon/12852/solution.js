const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(fp).toString().trim();

const solution = (n) => {
  const dp = new Array(n + 1).fill(Infinity);
  const prev = new Array(n + 1).fill(0);

  dp[1] = 0;
  prev[1] = -1;

  for (let i = 2; i <= n; i++) {
    if (i % 3 === 0 && dp[i / 3] + 1 < dp[i]) {
      dp[i] = dp[i / 3] + 1;
      prev[i] = i / 3;
    }
    if (i % 2 === 0 && dp[i / 2] + 1 < dp[i]) {
      dp[i] = dp[i / 2] + 1;
      prev[i] = i / 2;
    }
    if (dp[i - 1] + 1 < dp[i]) {
      dp[i] = dp[i - 1] + 1;
      prev[i] = i - 1;
    }
  }

  console.log(dp[n]);

  const ans = [];
  let cur = n;
  while (cur !== -1) {
    ans.push(cur);
    cur = prev[cur];
  }

  console.log(ans.join(' '));
};

solution(input);
