const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const [N, E] = input[0].split(' ').map(Number);
const [v1, v2] = input[E + 1].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => ({}));
for (let i = 1; i <= E; i++) {
  const [a, b, c] = input[i].split(' ').map(Number);
  graph[a][b] = c;
  graph[b][a] = c;
}

function dijkstra(graph, start) {
  let distances = {};
  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;

  let unvisited = new Set(Object.keys(graph));

  while (unvisited.size > 0) {
    let currentMinNode = getMinNode(unvisited, distances);
    unvisited.delete(currentMinNode);

    for (let neighbor in graph[currentMinNode]) {
      let distanceThroughCurrentMinNode =
        graph[currentMinNode][neighbor] + distances[currentMinNode];
      if (distanceThroughCurrentMinNode < distances[neighbor]) {
        distances[neighbor] = distanceThroughCurrentMinNode;
      }
    }
  }

  return distances;
}

function getMinNode(unvisited, distances) {
  return Array.from(unvisited).reduce((minNode, node) =>
    distances[node] < distances[minNode] ? node : minNode
  );
}

const startDistances = dijkstra(graph, 1);
const v1Distances = dijkstra(graph, v1);
const v2Distances = dijkstra(graph, v2);

const v1Path = startDistances[v1] + v1Distances[v2] + v2Distances[N];
const v2Path = startDistances[v2] + v2Distances[v1] + v1Distances[N];
const answer = Math.min(v1Path, v2Path);

console.log(answer < Infinity ? answer : -1);
