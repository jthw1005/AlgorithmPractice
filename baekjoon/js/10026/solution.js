const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n');

const data = input.map((v) => v.split(''));

const solution = (n, data, y) => {
  const visited = Array.from({ length: n }, () => new Array(n).fill(0));

  const check1 = (row, col, val) => {
    if (data[row][col] !== val) return true;
    return false;
  };

  const check2 = (row, col, val) => {
    if (data[row][col] === 'R' || data[row][col] === 'G') {
      if (val !== 'B') return false;
      return true;
    } else {
      if (data[row][col] !== val) return true;
      return false;
    }
  };

  const recursiveFn = (row, col, val, checkFn) => {
    if (
      row < 0 ||
      row >= n ||
      col < 0 ||
      col >= n ||
      visited[row][col] ||
      checkFn(row, col, val)
    ) {
      return;
    }
    visited[row][col] = 1;
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];
    for (let i = 0; i < 4; i++) {
      recursiveFn(row + dr[i], col + dc[i], val, checkFn);
    }
  };

  let answer = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j]) {
        continue;
      }
      answer++;
      recursiveFn(i, j, data[i][j], y ? check1 : check2);
    }
  }

  return answer;
};

console.log(`${solution(+n, data, true)} ${solution(+n, data, false)}`);
