const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, m] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(BigInt);

const value = factorial(n) / (factorial(n - m) * factorial(m));
console.log(value.toString());

function factorial(n) {
  let answer = 1n;
  let i = 1n;
  for (; i <= n; i++) {
    answer *= i;
  }
  return answer;
}
