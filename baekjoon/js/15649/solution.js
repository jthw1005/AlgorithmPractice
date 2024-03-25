const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, m] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

function solution(n, m) {
  let answer = '';
  const result = [];
  const visitedObj = Array.from({ length: n }, () => false);

  const innerFunc = (index) => {
    if (index === m) {
      answer = answer + result.join(' ') + '\n';
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (!visitedObj[i - 1]) {
        visitedObj[i - 1] = true;
        result.push(i);
        innerFunc(index + 1);
        visitedObj[i - 1] = false;
        result.pop();
      }
    }
  };

  innerFunc(0);
  return answer;
}

console.log(solution(n, m));
