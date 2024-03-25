const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const regex = /(\+|-)/g;
const arr = input.split(regex);
let idx = arr.indexOf('-');

if (idx === -1) {
  idx = arr.length;
}

let sum1 = 0;
for (let i = 0; i < idx; i++) {
  if (!isNaN(arr[i])) {
    sum1 += +arr[i];
  }
}

let sum2 = 0;
if (idx !== -1) {
  for (let i = idx; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      sum2 += +arr[i];
    }
  }
}

console.log(sum1 - sum2);
