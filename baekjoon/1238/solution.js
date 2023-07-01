const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const [N, M, X] = input[0].split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(Infinity));

for (let i = 1; i <= N; i++) {
  graph[i][i] = 0;
}

for (let i = 1; i <= M; i++) {
  const [from, to, time] = input[i].split(' ').map(Number);
  graph[from][to] = time;
}

for (let k = 1; k <= N; k++) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
    }
  }
}

let maxTime = -1;
for (let i = 1; i <= N; i++) {
  maxTime = Math.max(maxTime, graph[i][X] + graph[X][i]);
}

console.log(maxTime);
