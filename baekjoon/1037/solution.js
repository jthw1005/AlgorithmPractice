const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, arr] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const input = arr
  .split(' ')
  .map(Number)
  .sort((n, p) => n - p);
let answer;

if (+n === 1) {
  answer = input ** 2;
} else {
  answer = input[0] * input[input.length - 1];
}

console.log(answer);
