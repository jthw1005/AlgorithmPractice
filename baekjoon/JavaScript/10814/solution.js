const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();
const [n, ...arr] = input.split('\n');
const newArr = arr
  .map((el) => el.split(' '))
  .sort((next, prev) => next[0] - prev[0])
  .map((el) => el.join(' '))
  .join('\n');
console.log(newArr);
