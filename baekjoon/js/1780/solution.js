const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n');

const data = input.map((v) => v.split(' ').map(Number));

const checkVaild = (size, row, col, standard) => {
  for (let i = row; i < row + size; i++) {
    for (let j = col; j < col + size; j++) {
      if (data[i][j] !== standard) {
        return false;
      }
    }
  }
  return true;
};

const solution = () => {
  const answer = Array.from({ length: 3 }, () => 0);

  const recFn = (row, col, size) => {
    if (size === 1) {
      answer[data[row][col] + 1]++;
      return;
    }
    if (checkVaild(size, row, col, data[row][col])) {
      answer[data[row][col] + 1]++;
    } else {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          recFn(row + i * (size / 3), col + j * (size / 3), size / 3);
        }
      }
    }
  };

  recFn(0, 0, +n);

  return answer;
};

console.log(solution().join('\n'));
