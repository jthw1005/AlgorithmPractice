const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

input.pop();

const solution = (a, b) => {
  let answer;
  if (a % b === 0) {
    answer = 'multiple';
  } else if (b % a === 0) {
    answer = 'factor';
  } else {
    answer = 'neither';
  }
  return answer;
};

const answer = [];
input.forEach((el) => {
  const [a, b] = el;
  answer.push(solution(a, b));
});

console.log(answer.join('\n'));
