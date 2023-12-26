const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const n = +require('fs').readFileSync(filePath).toString().trim();

const dpArr = Array.from({ length: n }, () => new Array(10).fill(1));
dpArr[0][0] = 0;

for (let i = 1; i < n; i++) {
  for (let j = 0; j <= 9; j++) {
    if (j === 0) {
      dpArr[i][j] = dpArr[i - 1][j + 1] % 1000000000;
    } else if (j === 9) {
      dpArr[i][j] = dpArr[i - 1][j - 1] % 1000000000;
    } else {
      dpArr[i][j] = (dpArr[i - 1][j - 1] + dpArr[i - 1][j + 1]) % 1000000000;
    }
  }
}

const result = dpArr[n - 1].reduce((acc, cur) => (acc + cur) % 1000000000, 0);
console.log(result);
