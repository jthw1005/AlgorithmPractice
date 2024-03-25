const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');
const n = +input[0];
const m = +input[1];

const graph = Array.from({ length: n }, () => new Array(n).fill(Infinity));

for (let i = 0; i < n; i++) {
  graph[i][i] = 0;
}

for (let i = 2; i < 2 + m; i++) {
  const [start, end, cost] = input[i].split(' ').map(Number);
  if (graph[start - 1][end - 1] > cost) {
    graph[start - 1][end - 1] = cost;
  }
}

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    if (k === i) {
      continue;
    }
    for (let j = 0; j < n; j++) {
      if (k === j) {
        continue;
      }
      if (graph[i][j] > graph[i][k] + graph[k][j]) {
        graph[i][j] = graph[i][k] + graph[k][j];
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === Infinity) {
      graph[i][j] = 0;
    }
  }
}

console.log(graph.map((v) => v.join(' ')).join('\n'));
