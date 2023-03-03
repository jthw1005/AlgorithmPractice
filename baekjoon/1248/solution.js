const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');
const n = +input[0];
const matrix = input[1].split('');

// console.log(n, matrix);
const newArr = [];

for (let i = +n; i > 0; i--) {
  newArr.push(matrix.splice(0, i));
}

const solution = (str, idx) => {
  let candidate;
  if (str[0] === '+') {
    candidate = Array.from({ length: 10 }, (_, idx) => idx + 1);
  } else if (str[0] === '-') {
    candidate = Array.from({ length: 10 }, (_, idx) => -(idx + 1));
  } else {
    return 0;
  }
};

solution('+', 0);
solution('-', 0);
