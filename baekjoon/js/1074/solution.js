const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, r, c] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const solution = (startNum, len, row, col) => {
  if (len === 1) return startNum;
  if (row < len / 2 && col < len / 2) {
    return solution(startNum + (len / 2) ** 2 * 0, len / 2, row, col);
  } else if (row < len / 2 && col >= len / 2) {
    return solution(startNum + (len / 2) ** 2 * 1, len / 2, row, col - len / 2);
  } else if (row >= len / 2 && col < len / 2) {
    return solution(startNum + (len / 2) ** 2 * 2, len / 2, row - len / 2, col);
  } else {
    return solution(
      startNum + (len / 2) ** 2 * 3,
      len / 2,
      row - len / 2,
      col - len / 2
    );
  }
};

console.log(solution(0, 2 ** N, r, c));
