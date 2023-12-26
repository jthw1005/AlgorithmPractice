const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, m], arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const obj = { 0: 1 };
let answer = 0;

for (let i = 0; i < n; i++) {
  if (i === 0) {
    arr[i] %= m;
  } else {
    arr[i] = (arr[i - 1] + arr[i]) % m;
  }
  obj[arr[i]] = obj[arr[i]] || 0;
  answer += obj[arr[i]];
  obj[arr[i]]++;
}

console.log(answer);
