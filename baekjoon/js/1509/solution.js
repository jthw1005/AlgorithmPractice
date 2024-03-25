const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim();

const MAX_LENGTH = 2500;
const len = input.length;
const dp = Array.from({ length: len + 1 }, () => MAX_LENGTH);
const isPalindrome = Array.from({ length: len }, () => Array(len).fill(0));

for (let i = 0; i < len; i++) {
  isPalindrome[i][i] = 1;
  if (i < len - 1 && input[i] === input[i + 1]) {
    isPalindrome[i][i + 1] = 1;
  }
}

for (let d = 2; d < len; d++) {
  for (let i = 0; i < len - d; i++) {
    if (input[i] === input[i + d] && isPalindrome[i + 1][i + d - 1]) {
      isPalindrome[i][i + d] = 1;
    }
  }
}

dp[0] = 0;
for (let i = 1; i <= len; i++) {
  for (let j = 1; j <= i; j++) {
    if (isPalindrome[j - 1][i - 1]) {
      dp[i] = Math.min(dp[i], dp[j - 1] + 1);
    }
  }
}

console.log(dp[len]);
