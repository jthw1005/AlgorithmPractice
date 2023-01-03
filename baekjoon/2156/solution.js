const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const n = input.shift();
const dpArr = [];
for (let i = 0; i < n; i++) {
  dpArr[i] = Math.max(
    dpArr[i - 1] || 0,
    (dpArr[i - 2] || 0) + input[i],
    (dpArr[i - 3] || 0) + input[i] + (input[i - 1] || 0)
  );
}
console.log(dpArr[n - 1]);

/* 전체 - 최솟값
  input.push(0);
  const dpArr = [];
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += input[i];
    if (i < 3) {
      dpArr[i] = input[i];
    } else {
      dpArr[i] = input[i] + Math.min(dpArr[i - 1], dpArr[i - 2], dpArr[i - 3]);
    }
  }
  console.log(sum - dpArr[n]);
*/
