const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const arr = input[1].split(' ').map(Number);
const stack = [];
const answer = new Array(n).fill(-1);
const freq = new Array(1000001).fill(0);

for (let i = 0; i < n; i++) {
  freq[arr[i]]++;
}

for (let i = 0; i < n; i++) {
  while (stack.length && freq[arr[i]] > freq[arr[stack[stack.length - 1]]]) {
    answer[stack.pop()] = arr[i];
  }
  stack.push(i);
}

console.log(answer.join(' '));
