const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [nk, ...arr] = require('fs').readFileSync(filePath).toString().trim().split('\n');

let [_, k] = nk.split(' ').map(Number);
const coins = arr.map(Number);

let idx = coins.length - 1;

let cnt = 0;
while (k > 0) {
  const share = Math.floor(k / coins[idx]);
  if (share > 0) {
    k = k - coins[idx] * share;
    cnt = cnt + share;
  } else {
    idx--;
  }
}

console.log(cnt);
