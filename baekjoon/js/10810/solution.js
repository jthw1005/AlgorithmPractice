const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, m], ...input] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const arr = Array.from({ length: n }, () => 0);

for (let i = 0; i < m; i++) {
  const [p, q, r] = input[i];
  for (let j = p; j <= q; j++) {
    arr[j - 1] = r;
  }
}

console.log(arr.join(' '));
