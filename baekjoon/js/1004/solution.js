const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift();

const getDistance = (x1, y1, x2, y2) => {
  const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  return distance;
};

const answer = [];

for (let i = 0; i < T; i++) {
  const [x1, y1, x2, y2] = input.shift().split(' ').map(Number);
  const n = +input.shift();
  const arr = input.splice(0, n).map((v) => v.split(' ').map(Number));
  let result = 0;
  arr.forEach((el) => {
    const [cx, cy, r] = el;
    const isStartPointIn = getDistance(x1, y1, cx, cy) <= r;
    const isEndPointIn = getDistance(x2, y2, cx, cy) <= r;
    if (isStartPointIn || isEndPointIn) {
      result++;
    }
    if (isStartPointIn && isEndPointIn) {
      result--;
    }
  });
  answer.push(result);
}

console.log(answer.join('\n'));
