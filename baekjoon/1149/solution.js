const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const input = arr.map((v) => v.split(' ').map(Number));
const dpTable = Array.from({ length: +n + 1 }, () => new Array(3).fill(0));
dpTable[1] = input[0];

for (let i = 2; i <= +n; i++) {
  dpTable[i].forEach((el, idx, arr) => {
    arr[idx] =
      Math.min(dpTable[i - 1][(idx + 1) % 3], dpTable[i - 1][(idx + 2) % 3]) +
      input[i - 1][idx];
  });
}

console.log(Math.min(...dpTable[n]));
