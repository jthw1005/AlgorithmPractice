const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const arr = input.split(' ').map((el) => +el);
const hash = {};
let answer = 0;

for (let i = 0; i < arr.length; i++) {
  hash[arr[i]] = hash[arr[i]] || 0;
  hash[arr[i]]++;
}

for (let key in hash) {
  if (hash[key] === 3) {
    answer = 10000 + key * 1000;
  } else if (hash[key] === 2) {
    answer = 1000 + key * 100;
    break;
  } else {
    answer = Math.max(...arr) * 100;
  }
}

console.log(answer);
