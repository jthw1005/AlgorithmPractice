const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, k], input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

let sum = 0;
for (let i = 0; i < k; i++) {
  sum += input[i];
}

let maxSum = sum;
for (let i = 0; i + k < n; i++) {
  sum = sum - input[i] + input[i + k];
  maxSum = maxSum > sum ? maxSum : sum;
}

console.log(maxSum);
