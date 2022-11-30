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
  const candidate = [...new Set(arr)].sort((next, prev) => next - prev);

  const innerFunc = (index) => {
    if (index === m) {
      answer = answer + result.join(' ') + '\n';
      return;
    }

    const currMax = result.length ? result[result.length - 1] : 0;

    candidate
      .filter((el) => currMax <= el)
      .forEach((el) => {
        result.push(el);
        innerFunc(index + 1);
        result.pop();
      });
  };

  innerFunc(0);
  return answer;
}

console.log(solution(m, arr));
