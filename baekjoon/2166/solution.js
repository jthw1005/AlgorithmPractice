const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n');

let points = input.map((v) => v.split(' ').map(Number));
points.push(points[0]);

let sum1 = 0;
let sum2 = 0;

for (let i = 0; i < n; i++) {
  sum1 += points[i][0] * points[i + 1][1];
  sum2 += points[i][1] * points[i + 1][0];
}

console.log(Math.abs((sum1 - sum2) / 2).toFixed(1));
