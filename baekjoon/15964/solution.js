const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);
const answer = (a + b) * (a - b);
console.log(answer);
