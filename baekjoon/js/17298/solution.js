const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

/*
1. compare current number with the top of the stack.
2. if the top number is bigger, just push the current number.
3. if the top number is smaller, pop it up and fill answer array with current number.
  3-1. repeat 3.
4. if loop ends, fill last answer array with -1.
*/

const arr = input.split(' ').map(Number);
const stack = [];
const answer = new Array(+n);
let currNum, top, topIdx;

for (let i = 0; i < +n; i++) {
  currNum = arr[i];
  top = arr[stack[stack.length - 1]];
  while (top && top < currNum) {
    topIdx = stack.pop();
    answer[topIdx] = currNum;
    top = arr[stack[stack.length - 1]];
  }
  stack.push(i);
}

for (let i = 0; i < stack.length; i++) {
  answer[stack[i]] = -1;
}

console.log(answer.join(' '));
