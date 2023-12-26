const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const n = +input[0];
const data = input.slice(1).map((v) => v.split(' ').map(Number));

const solution = (n, data) => {
  let white = 0;
  let blue = 0;

  const checkValid = (len, row, col) => {
    const currVal = data[row][col];
    for (let i = row; i < row + len; i++) {
      for (let j = col; j < col + len; j++) {
        if (data[i][j] !== currVal) return false;
      }
    }
    if (currVal === 1) blue++;
    else white++;
    return true;
  };

  const recursive = (len, row, col) => {
    if (checkValid(len, row, col)) return;
    recursive(len / 2, row, col);
    recursive(len / 2, row, col + len / 2);
    recursive(len / 2, row + len / 2, col);
    recursive(len / 2, row + len / 2, col + len / 2);
  };

  recursive(n, 0, 0);

  return [white, blue];
};

console.log(solution(n, data).join('\n'));
