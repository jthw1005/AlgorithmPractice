const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

if (!n) {
  console.log(0);
} else {
  const lim = Math.round(n * 0.15);
  input.sort((n, p) => n - p);
  let sum = 0;
  for (let i = lim; i < n - lim; i++) {
    sum += input[i];
  }
  console.log(Math.round(sum / (n - 2 * lim)));
}
