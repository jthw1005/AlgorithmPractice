const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, k] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const countUnderX = (x, n) => {
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    cnt += Math.min(n, Math.floor(x / i));
  }
  return cnt;
};

let lo = 1;
let hi = k;
let mid;

while (lo + 1 < hi) {
  mid = Math.floor((lo + hi) / 2);
  const cnt = countUnderX(mid, n);
  if (cnt >= k) {
    hi = mid;
  } else {
    lo = mid;
  }
}

console.log(hi);
