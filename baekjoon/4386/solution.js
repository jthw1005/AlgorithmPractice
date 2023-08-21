const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const n = parseInt(input[0], 10);
const stars = [];
const edges = [];

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  stars.push([x, y]);
}

// 모든 별들 사이의 거리를 계산하여 간선 배열에 저장
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    const dist = Math.sqrt(Math.pow(stars[i][0] - stars[j][0], 2) + Math.pow(stars[i][1] - stars[j][1], 2));
    edges.push([dist, i, j]);
  }
}

// 간선 거리 기준 오름차순 정렬
edges.sort((a, b) => a[0] - b[0]);

const parent = Array.from({ length: n }, (_, idx) => idx);

function find(x) {
  if (parent[x] !== x) {
    parent[x] = find(parent[x]);
  }
  return parent[x];
}

function union(x, y) {
  const rootX = find(x);
  const rootY = find(y);

  if (rootX !== rootY) {
    parent[rootY] = rootX;
  }
}

let answer = 0;
for (let edge of edges) {
  const [cost, from, to] = edge;

  if (find(from) !== find(to)) {
    union(from, to);
    answer += cost;
  }
}

console.log(answer.toFixed(2));
