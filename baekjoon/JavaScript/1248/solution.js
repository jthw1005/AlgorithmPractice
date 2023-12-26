const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');
const n = +input[0];
const matrix = input[1].split('');

const newArr = [];
for (let i = +n; i > 0; i--) {
  newArr.push(matrix.splice(0, i));
}

const resultArr = [];

const solution = (level) => {
  // 종료 조건
  if (level === n) {
    console.log(resultArr.join(' '));
    process.exit();
  }

  // 다음 후보 선택
  let candidate;
  if (newArr[level][0] === '+') {
    candidate = Array.from({ length: 10 }, (_, i) => i + 1);
  } else if (newArr[level][0] === '-') {
    candidate = Array.from({ length: 10 }, (_, i) => -(i + 1));
  } else {
    candidate = [0];
  }

  for (let i = 0; i < level; i++) {
    candidate = candidate.filter((el) => {
      let sum = el;
      for (let j = i; j < level; j++) {
        sum += resultArr[j];
      }
      if (newArr[i][level - i] === '+') {
        return sum > 0;
      } else if (newArr[i][level - i] === '-') {
        return sum < 0;
      } else {
        return sum === 0;
      }
    });
  }

  // 실행
  candidate.forEach((el) => {
    resultArr.push(el);
    solution(level + 1);
    resultArr.pop();
  });
};

solution(0);
