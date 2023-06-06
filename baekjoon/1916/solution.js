const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const N = parseInt(input[0]);
const M = parseInt(input[1]);
const [start, end] = input[M + 2].split(' ').map((e) => parseInt(e));

const graph = Array.from(Array(N + 1), () => []);

for (let i = 2; i < M + 2; i++) {
  const [from, to, cost] = input[i].split(' ').map((e) => parseInt(e));
  graph[from].push([to, cost]);
}

function dijkstra(start) {
  const distances = new Array(N + 1).fill(Infinity);
  const queue = [[start, 0]];
  distances[start] = 0;
  while (queue.length) {
    const [currentNode, currentCost] = queue.pop();
    if (distances[currentNode] < currentCost) continue;
    for (const [nextNode, nextCost] of graph[currentNode]) {
      const cost = currentCost + nextCost;
      if (cost < distances[nextNode]) {
        distances[nextNode] = cost;
        queue.push([nextNode, cost]);
      }
    }
  }
  return distances;
}

console.log(dijkstra(start)[end]);
