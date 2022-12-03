const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const max = Math.max(...input);
const dpArr = [0, 1, 1, 1, 2, 2];
const answer = [];

for (let i = 6; i <= max; i++) {
  dpArr[i] = dpArr[i - 1] + dpArr[i - 5];
}

for (let i = 0; i < n; i++) {
  answer.push(dpArr[input[i]]);
}

console.log(answer.join('\n'));
