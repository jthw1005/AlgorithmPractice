const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const strLen = input.length;
const set = new Set();
for (let length = 1; length <= strLen; length++) {
  for (let i = 0; i + length <= strLen; i++) {
    set.add(input.substring(i, i + length));
  }
}
console.log(set.size);
