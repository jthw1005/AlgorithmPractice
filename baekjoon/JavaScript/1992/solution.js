const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n');

const data = input.map((v) => v.split('').map(Number));

const checkValidate = (row, col, len, data) => {
  const stdVal = data[row][col];
  for (let i = row; i < row + len; i++) {
    for (let j = col; j < col + len; j++) {
      if (data[i][j] !== stdVal) {
        return false;
      }
    }
  }
  return true;
};

const solution = (row, col, len, data) => {
  if (len === 1) {
    return data[row][col];
  }
  if (checkValidate(row, col, len, data)) {
    return data[row][col];
  } else {
    const one = solution(row, col, len / 2, data);
    const two = solution(row, col + len / 2, len / 2, data);
    const thr = solution(row + len / 2, col, len / 2, data);
    const fou = solution(row + len / 2, col + len / 2, len / 2, data);
    return `(${one}${two}${thr}${fou})`;
  }
};

console.log(solution(0, 0, data.length, data));
