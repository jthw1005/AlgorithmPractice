const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const N = +input[0];
const M = +input[1];
const [start, end] = input[M + 2].split(' ').map(Number);

const graph = Array.from(Array(N + 1), () => []);
const visited = Array.from(Array(N + 1), () => false);

for (let i = 2; i < M + 2; i++) {
  const [from, to, cost] = input[i].split(' ').map(Number);
  graph[from].push([to, cost]);
}

function dijkstra(start) {
  const distances = new Array(N + 1).fill(Infinity);
  const queue = [[start, 0]];
  distances[start] = 0;
  while (queue.length) {
    const [currentNode, currentCost] = queue.pop();
    visited[currentNode] = true;
    if (distances[currentNode] < currentCost) continue;
    for (const [nextNode, nextCost] of graph[currentNode]) {
      const cost = currentCost + nextCost;
      if (cost < distances[nextNode] && !visited[nextNode]) {
        distances[nextNode] = cost;
        queue.push([nextNode, cost]);
      }
    }
    queue.sort((n, p) => p[1] - n[1]);
  }
  return distances;
}

console.log(dijkstra(start)[end]);
