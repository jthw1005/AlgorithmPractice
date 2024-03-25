const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const dpArr = Array.from({ length: 21 }, () =>
  Array.from({ length: 21 }, () => Array.from({ length: 21 }, () => null))
);

function w(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return 1;
  } else if (a > 20 || b > 20 || c > 20) {
    return w(20, 20, 20);
  } else if (dpArr[a][b][c]) {
    return dpArr[a][b][c];
  } else if (a < b && b < c) {
    dpArr[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
    return dpArr[a][b][c];
  } else {
    dpArr[a][b][c] =
      w(a - 1, b, c) + w(a - 1, b - 1, c) + w(a - 1, b, c - 1) - w(a - 1, b - 1, c - 1);
    return dpArr[a][b][c];
  }
}

const answer = [];
input.forEach((el) => {
  const [a, b, c] = el;
  if (a === -1 && b === -1 && c === -1) {
    return;
  }
  answer.push(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
});
console.log(answer.join('\n'));
