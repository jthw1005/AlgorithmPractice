const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, m], arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

function solution(m, arr) {
  let answer = '';
  const result = [];
  const obj = {};
  arr.forEach((el) => {
    obj[el] = obj[el] || 0;
    obj[el]++;
  });
  const candidate = Object.keys(obj)
    .map(Number)
    .sort((next, prev) => next - prev);

  const innerFunc = (index) => {
    if (index === m) {
      answer = answer + result.join(' ') + '\n';
      return;
    }

    candidate.forEach((el) => {
      if (obj[el] !== 0) {
        result.push(el);
        obj[el]--;
        innerFunc(index + 1);
        result.pop();
        obj[el]++;
      }
    });
  };

  innerFunc(0);
  return answer;
}

console.log(solution(m, arr));
