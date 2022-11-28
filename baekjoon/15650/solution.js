const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, m] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

function solution(n, m) {
  const answer = [];

  function innerFunc(index, inputArr, result) {
    if (result.length === m) {
      answer.push(result);
    }

    inputArr.forEach((el) =>
      innerFunc(
        index + 1,
        inputArr.filter((ell) => ell > el),
        result + el
      )
    );
  }

  const inputArr = Array.from({ length: n }, (_, i) => i + 1);
  innerFunc(0, inputArr, '');

  return answer.map((v) => v.split('').join(' ')).join('\n');
}

console.log(solution(n, m));
