const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, k] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const queue = Array.from({ length: n }, (_, i) => i + 1);
const result = [];
let curIdx = 1;

while (queue.length) {
  if (curIdx % k === 0) {
    result.push(queue.shift());
  } else {
    queue.push(queue.shift());
  }
  curIdx++;
}

console.log('<' + result.join(', ') + '>');
