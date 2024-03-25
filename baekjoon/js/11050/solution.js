const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, m] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const fac = (n) => {
  if (n <= 1) return 1;
  return n * fac(n - 1);
};

const answer = fac(n) / (fac(n - m) * fac(m));

console.log(answer);
