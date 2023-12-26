const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, m], ...data] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const dist = Array.from({ length: n + 1 }, () =>
  new Array(n + 1).fill(Infinity)
);

for (let el of data) {
  const [v1, v2] = el;
  dist[v1][v2] = 1;
  dist[v2][v1] = 1;
}

for (let k = 1; k <= n; k++) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (dist[i][k] + dist[j][k] < dist[i][j]) {
        dist[i][j] = dist[i][k] + dist[j][k];
      }
    }
  }
}

let minVal = Infinity;
let minIdx = null;

for (let i = 1; i <= n; i++) {
  let sum = 0;
  for (let j = 1; j <= n; j++) {
    if (i === j) {
      continue;
    }
    sum += dist[i][j];
  }

  if (sum < minVal) {
    minIdx = i;
    minVal = sum;
  }
}

console.log(minIdx);
