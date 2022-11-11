const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => +el);

const [num, ...arr] = input;
console.log(arr.sort((next, prev) => next - prev).join('\n'));
