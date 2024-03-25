const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const t = +input[0];

const gcd = (a, b) => (a % b ? gcd(b, a % b) : b);
const lcm = (a, b) => (a * b) / gcd(a, b);

const sol = (M, N, x, y) => {
  const maxYear = lcm(M, N);
  let result = -1;

  for (let i = x; i <= maxYear; i += M) {
    if (i % N === y % N) {
      result = i;
      break;
    }
  }

  return result;
};

const ans = [];

for (let i = 1; i <= t; i++) {
  ans.push(sol(...input[i].split(' ').map(Number)));
}

console.log(ans.join('\n'));
