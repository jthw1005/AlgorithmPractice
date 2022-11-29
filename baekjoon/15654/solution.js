const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, m], arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

function solution(m) {
  let answer = '';
  const result = [];
  const visitedObj = {};
  const input = arr.sort((next, prev) => next - prev);

  const innerFunc = (index) => {
    if (index === m) {
      answer = answer + result.join(' ') + '\n';
      return;
    }

    input.forEach((el) => {
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
