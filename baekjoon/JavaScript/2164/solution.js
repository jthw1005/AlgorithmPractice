const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const n = +require('fs').readFileSync(filePath).toString().trim();

const queue = Array.from({ length: n }, (_, i) => i + 1);

let cnt = 0;

while (cnt + 1 < queue.length) {
  if (cnt % 2 !== 0) {
    queue.push(queue[cnt]);
  }
  cnt++;
}

console.log(queue[cnt]);
