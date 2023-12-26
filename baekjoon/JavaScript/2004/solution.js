const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, m] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

function getPower(num, power) {
  let cnt = 0;
  while (num >= power) {
    cnt = cnt + Math.floor(num / power);
    num = num / power;
  }
  return cnt;
}

const two = getPower(n, 2) - getPower(m, 2) - getPower(n - m, 2);
const five = getPower(n, 5) - getPower(m, 5) - getPower(n - m, 5);

console.log(Math.min(two, five));
