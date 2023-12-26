const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, input] = require('fs').readFileSync(filePath).toString().trim().split(`\n`);

const obj = {};
const arr = Array.from(new Set([...input.split(' ')]))
  .map((el) => +el)
  .sort((n, p) => n - p);
arr.forEach((el, idx) => (obj[el] = idx));

const answer = input
  .split(' ')
  .map((el) => obj[el])
  .join(' ');

console.log(answer);
