const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const n = parseInt(input[0]);
const matrix = [];
for (let i = 1; i <= n; i++) {
    matrix.push(input[i].split(' ').map(Number));
}

const dp = Array.from({ length: n }, () => Array(n).fill(0));

for (let l = 2; l <= n; l++) {
    for (let i = 0; i <= n - l; i++) {
        const j = i + l - 1;
        dp[i][j] = Infinity;
        for (let k = i; k < j; k++) {
            dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j] + matrix[i][0] * matrix[k][1] * matrix[j][1]);
        }
    }
}

console.log(dp[0][n - 1]);
