const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(Math.abs(input[0] - input[1]));
