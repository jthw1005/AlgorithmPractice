const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const solution = (n, m, priorities) => {
  let newArr = priorities;
  const num = newArr[m];
  newArr[m] *= -1;
  let cnt = 0;
  while (true) {
    const max = Math.max(...newArr);
    if (max > num) {
      const maxIdx = newArr.indexOf(max);
      newArr = newArr.slice(maxIdx + 1).concat(newArr.slice(0, maxIdx));
      cnt++;
    } else {
      break;
    }
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] < 0) {
        break;
      } else {
        cnt++;
      }
    }
  }
  return cnt;
};

const testCase = +input.shift();
const answer = [];

for (let i = 0; i < testCase; i++) {
  const [n, m] = input.shift().split(' ').map(Number);
  const priorities = input.shift().split(' ').map(Number);
  const result = solution(n, m, priorities);
  answer.push(result);
}

console.log(answer.join('\n'));
// console.log(solution(0, 2, [1, 2, 3, 4]));
