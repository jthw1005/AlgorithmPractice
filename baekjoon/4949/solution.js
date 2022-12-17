const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const open = ['(', '['];
const closed = [')', ']'];

let stack;
const answer = [];

input.slice(0, input.length - 1).forEach((v) => {
  let isNo = false;
  stack = [];
  for (let i = 0; i < v.length; i++) {
    if (open.includes(v[i])) stack.push(v[i]);
    else if (closed.includes(v[i])) {
      if (stack.pop() !== open[closed.indexOf(v[i])]) {
        answer.push('no');
        isNo = true;
        break;
      }
    }
  }
  if (!isNo) {
    if (stack.length === 0) answer.push('yes');
    else answer.push('no');
  }
});
console.log(answer.join('\n'));
