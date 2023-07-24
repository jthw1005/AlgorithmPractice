const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
    .readFileSync(fp)
    .toString()
    .trim()
    .split('\n')
    .map(v => v.split(' ').map(Number));

const [n, m, r] = input[0];

const graph = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(Infinity));

for (let i = 1; i <= n; i++) {
    graph[i][i] = 0;
}

for (let i = 2; i < 2 + r; i++) {
    const [from, to, dist] = input[i];
    graph[from][to] = Math.min(graph[from][to], dist);
    graph[to][from] = Math.min(graph[to][from], dist);
}

for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
        if (k === i) {
            continue;
        }
        for (let j = 1; j <= n; j++) {
            if (k === j) {
                continue;
            }
            if (graph[i][j] > graph[i][k] + graph[k][j]) {
                graph[i][j] = graph[i][k] + graph[k][j];
            }
        }
    }
}

let max = -Infinity;
for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = 1; j <= n; j++) {
        if (graph[i][j] <= m) {
            sum = sum + input[1][j - 1];
        }
    }
    max = Math.max(max, sum);
}
console.log(max);
