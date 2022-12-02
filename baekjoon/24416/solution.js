const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();

function solution(input) {
  let cnt_rec = 0;
  let cnt_dp = 0;

  const rec = (n) => {
    if (n === 1 || n === 2) {
      cnt_rec++;
      return 1;
    } else {
      return rec(n - 1) + rec(n - 2);
    }
  };

  const dp = (n) => {
    const dpArr = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
      cnt_dp++;
      dpArr[i] = dpArr[i - 1] + dpArr[i - 2];
    }
  };

  rec(input);
  dp(input);

  return cnt_rec + ' ' + cnt_dp;
}

console.log(solution(input));
