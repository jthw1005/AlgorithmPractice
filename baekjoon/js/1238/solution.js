const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const [n, m, x] = input[0];

const graph = Array.from({ length: n + 1 }, () =>
  new Array(n + 1).fill(Infinity)
);

for (let i = 1; i <= m; i++) {
  const [start, end, dist] = input[i];
  graph[start][end] = dist;
}

for (let k = 1; k <= n; k++) {
  for (let i = 1; i <= n; i++) {
    if (i === k) continue;
    for (let j = 1; j <= n; j++) {
      if (j === k) continue;
      if (graph[i][k] === Infinity || graph[k][j] === Infinity) continue;
      const newDist = graph[i][k] + graph[k][j];
      if (graph[i][j] > newDist) {
        graph[i][j] = newDist;
      }
    }
  }
}

let answer = 0;

for (let i = 1; i <= n; i++) {
  if (i === x) continue;
  const candidate = graph[i][x] + graph[x][i];
  if (candidate > answer) {
    answer = candidate;
  }
}

console.log(answer);
