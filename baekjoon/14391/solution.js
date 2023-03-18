const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim();

const inputArray = input.split('\n');
const [n, m] = inputArray[0].split(' ').map(Number);
const paper = inputArray.splice(1).map((el) => el.split('').map(Number));

function solution(n, m, paper) {
  let answer = 0;

  for (let i = 0; i < 1 << (n * m); i++) {
    let totalSum = 0;

    // 가로인 숫자들의 합
    for (let j = 0; j < n; j++) {
      let rowSum = 0;
      for (let k = 0; k < m; k++) {
        const index = j * m + k;
        if ((i & (1 << index)) === 0) {
          rowSum = rowSum * 10 + paper[j][k];
        } else {
          totalSum += rowSum;
          rowSum = 0;
        }
      }
      totalSum += rowSum;
    }

    // 세로인 숫자들의 합
    for (let j = 0; j < m; j++) {
      let colSum = 0;
      for (let k = 0; k < n; k++) {
        const index = k * m + j;
        if ((i & (1 << index)) !== 0) {
          colSum = colSum * 10 + paper[k][j];
        } else {
          totalSum += colSum;
          colSum = 0;
        }
      }
      totalSum += colSum;
    }

    answer = Math.max(answer, totalSum);
  }

  return answer;
}

console.log(solution(n, m, paper));
