const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const stack = [];
let num = 1;
let answer = [];
let pointer = 0;

while (pointer < n) {
  const top = stack[stack.length - 1];
  if (top === input[pointer]) {
    stack.pop();
    answer.push('-');
    pointer++;
  } else {
    if (num > n) {
      return console.log('NO');
    }
    stack.push(num);
    answer.push('+');
    num++;
  }
}

console.log(answer.join('\n'));
