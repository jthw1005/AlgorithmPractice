const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('').map(Number);

const arr = Array.from({ length: 10 }).fill(0);

for (let i = 0; i < input.length; i++) {
  if (input[i] === 9) {
    arr[6]++;
  } else {
    arr[input[i]]++;
  }
}

arr[6] = Math.ceil(arr[6] / 2);

console.log(Math.max(...arr));
