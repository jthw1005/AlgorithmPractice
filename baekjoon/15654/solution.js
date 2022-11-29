const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, m], input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

function solution(m) {
  let answer = '';
  const result = [];
  const visitedObj = {};

  const innerFunc = (index) => {
    if (index === m) {
      answer = answer + result.join(' ') + '\n';
      return;
    }

    input
      .sort((next, prev) => next - prev)
      .forEach((el) => {
        if (!visitedObj[el]) {
          visitedObj[el] = true;
          result.push(el);
          innerFunc(index + 1);
          visitedObj[el] = false;
          result.pop();
        }
      });
  };

  innerFunc(0);
  return answer;
}

console.log(solution(m));
