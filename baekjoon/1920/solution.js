const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [m, arr, n, input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const set = new Set(arr);
const answer = [];

input.forEach((el) => {
  if (set.has(el)) {
    answer.push(1);
  } else {
    answer.push(0);
  }
});

console.log(answer.join('\n'));
