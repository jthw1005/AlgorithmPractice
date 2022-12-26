const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, m], input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const rotateRight = (arr, cnt) => {
  for (let i = 0; i < cnt; i++) {
    const temp = arr.pop();
    arr.unshift(temp);
  }
};

const rotateLeft = (arr, cnt) => {
  for (let i = 0; i < cnt; i++) {
    const temp = arr.shift();
    arr.push(temp);
  }
};

let answer = 0;
const deque = Array.from({ length: n }, (_, i) => i + 1);
input.forEach((el) => {
  const idx = deque.indexOf(el);
  if (idx >= deque.length - idx) {
    rotateRight(deque, deque.length - idx);
    answer += deque.length - idx;
  } else {
    rotateLeft(deque, idx);
    answer += idx;
  }
  deque.shift();
});

console.log(answer);
