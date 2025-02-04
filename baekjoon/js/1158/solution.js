const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, k] = require('fs').readFileSync(fp).toString().trim().split(' ').map(Number);

let currIdx = 0;
const arr = Array.from({ length: n }, (_, idx) => idx + 1);
const result = [];

while (true) {
  if (result.length === n) {
    break;
  }

  currIdx = (currIdx + k - 1) % arr.length;
  result.push(arr.splice(currIdx, 1));
}

console.log('<' + result.join(', ') + '>');
