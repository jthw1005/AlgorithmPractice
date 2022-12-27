const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [testCase, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const solution = (m, priorities) => {
  let arr = priorities;
  const num = arr[m];
  arr[m] *= -1;
  let cnt = 0;
  while (true) {
    const max = Math.max(...arr);
    const idx = arr.indexOf(max);
    if (max > num) {
      arr = arr.slice(idx + 1).concat(arr.slice(0, idx));
      cnt++;
    } else {
      break;
    }
  }
  let i = 0;
  while (arr[i] > 0) {
    if (arr[i] === num) {
      cnt++;
    }
    i++;
  }
  return cnt + 1;
};

const answer = [];
for (let i = 0; i < testCase; i++) {
  const [n, m] = input.shift().split(' ').map(Number);
  const priorities = input.shift().split(' ').map(Number);
  const result = solution(m, priorities);
  answer.push(result);
}

console.log(answer.join('\n'));
