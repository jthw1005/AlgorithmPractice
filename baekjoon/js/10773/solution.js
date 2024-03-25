const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.shift();

const stack = [];

input.forEach((el) => {
  if (el === '0') {
    stack.pop();
  } else {
    stack.push(+el);
  }
});

const answer = stack.reduce((acc, cur) => acc + cur, 0);
console.log(answer);
