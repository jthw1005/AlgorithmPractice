const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.shift();

const answer = [];
const stack = [];

input.forEach((el) => {
  const [cmd, arg] = el.split(' ');
  if (cmd === 'push') {
    stack.push(arg);
  } else if (cmd === 'pop') {
    answer.push(stack.length === 0 ? -1 : stack.pop());
  } else if (cmd === 'size') {
    answer.push(stack.length);
  } else if (cmd === 'empty') {
    answer.push(stack.length === 0 ? 1 : 0);
  } else if (cmd === 'top') {
    answer.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
  }
});

console.log(answer.join('\n'));
