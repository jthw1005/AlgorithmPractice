const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [_, dists, costs] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(BigInt));

let currentMinVal = costs[0];
let totalSum = 0n;

for (let i = 0; i < costs.length - 1; i++) {
  if (costs[i] < currentMinVal) {
    currentMinVal = costs[i];
  }
  totalSum += currentMinVal * dists[i];
}

console.log(String(totalSum));
