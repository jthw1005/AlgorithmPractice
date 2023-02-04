const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const testCase = +input.shift();
const answer = [];
const solution = (str) =>
  str
    .split(' ')
    .map((v) => v.split('').reverse().join(''))
    .join(' ');
for (let i = 0; i < testCase; i++) {
  answer.push(solution(input[i]));
}
console.log(answer.join('\n'));
