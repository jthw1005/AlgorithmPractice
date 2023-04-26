const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');
const data = input[1].split(' ').map(Number);

const solution = (data) => {
  let lp = 0;
  let rp = data.length - 1;

  let minDiff = Infinity;
  let answer = [];

  while (lp < rp) {
    const currentDiff = data[rp] + data[lp];
    if (minDiff > Math.abs(currentDiff)) {
      answer = [data[lp], data[rp]];
      minDiff = Math.abs(currentDiff);
    }
    if (currentDiff >= 0) {
      rp -= 1;
    } else {
      lp += 1;
    }
  }

  return answer;
};

console.log(solution(data).join(' '));
