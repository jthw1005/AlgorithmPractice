const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim();

const [a, b] = input.split(' ').map(Number);

const solution = (a, b) => {
  let cnt = 0;
  let newB = b;

  while (newB > 1) {
    cnt++;
    // b가 홀수인 경우
    if (newB % 2 === 1) {
      // b가 1로 끝나는 경우
      if (newB % 10 === 1) {
        newB = (newB - 1) / 10;
        if (newB === a) return cnt;
      }
      // b가 1로 끝나지 않는 경우
      else return false;
      // b가 짝수인 경우
    } else {
      newB /= 2;
      if (newB === a) return cnt;
    }
  }

  return false;
};

const answer = solution(a, b);
console.log(answer ? answer + 1 : -1);
