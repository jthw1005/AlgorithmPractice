const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const n = +input.shift();
const arr = input.map((v) => v.split(' ').map(Number));

const dpTable = Array.from({ length: n }, (_, i) => new Array(i + 1));
dpTable[0][0] = arr[0][0];

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i + 1; j++) {
    if (j === 0) {
      dpTable[i][j] = arr[i][j] + dpTable[i - 1][j];
    } else if (j === i) {
      dpTable[i][j] = arr[i][j] + dpTable[i - 1][j - 1];
    } else {
      dpTable[i][j] =
        arr[i][j] + Math.max(dpTable[i - 1][j - 1], dpTable[i - 1][j]);
    }
  }
}

console.log(Math.max(...dpTable[n - 1]));
