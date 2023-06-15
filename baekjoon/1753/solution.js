const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const [v, e] = input[0].split(' ').map(Number);
const k = +input[1];
const data = input.slice(2).map((v) => v.split(' ').map(Number));

/*
1. 정점들의 개수를 크기로 갖는 배열을 하나 생성, 시작점은 0, 나머지는 Inf
[Inf, 0, Inf, Inf, Inf]

2. 시작 정점부터 반복문 시작

3. 현재 정점과 이웃하는 정점들에 대하여
배열[현재 정점] + 이웃까지의 거리 < 배열[이웃 정점] 인 경우
배열[이웃 정점]을 업데이트
현재 정점 방문 처리 후 방문하지 않은 정점 중 최단 거리 선택
*/

const distances = Array.from({ length: v + 1 }, () => Infinity);
// [Inf, Inf, 0, 2, 5, 3]
const visited = Array.from({ length: v + 1 }, () => false);
// [false, false, false, false, false, false]
const graph = Array.from({ length: v + 1 }, () => []);
// [[], [[1, 3], [4, 1]], [], [], [], []]

for (let i = 0; i < e; i++) {
  const [v1, v2, w] = data[i];
  graph[v1].push([v2, w]);
}

const queue = [[k, 0]];
distances[k] = 0;

while (queue.length) {
  const [currNode, currCost] = queue.pop();
  visited[currNode] = true;

  for (const [neighborNode, neighborCost] of graph[currNode]) {
    const cost = currCost + neighborCost;
    if (cost < distances[neighborNode] && !visited[neighborNode]) {
      distances[neighborNode] = cost;
      queue.push([neighborNode, cost]);
    }
  }

  queue.sort((n, p) => p[1] - n[1]);
}

for (let i = 1; i <= v; i++) {
  if (distances[i] === Infinity) {
    distances[i] = 'INF';
  }
}

console.log(distances.slice(1).join('\n'));
