const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [_, ...input] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number))
  .map((v, i) => {
    v.push(i);
    return v;
  });

const findParent = (parent, x) => {
  if (parent[x] === x) return x;
  return findParent(parent, parent[x]);
};

const unionParent = (parent, a, b) => {
  a = findParent(parent, a);
  b = findParent(parent, b);
  if (a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
};

const kruskalAlgorithm = (edges, n) => {
  const parent = [];
  let result = 0;
  let cost;

  for (let i = 1; i <= n; i++) {
    parent[i] = i;
  }

  edges.sort((a, b) => a.cost - b.cost);

  for (let edge of edges) {
    cost = edge.cost;
    if (findParent(parent, edge.a) === findParent(parent, edge.b)) continue;
    unionParent(parent, edge.a, edge.b);
    result += cost;
  }

  return result;
};

const minCostTunnel = (coordinates) => {
  let n = coordinates.length;
  const edges = [];

  for (let i = 0; i < 3; i++) {
    coordinates.sort((n, p) => n[i] - p[i]);
    for (let j = 0; j < n - 1; j++) {
      edges.push({
        a: coordinates[j][3],
        b: coordinates[j + 1][3],
        cost: Math.abs(coordinates[j][i] - coordinates[j + 1][i]),
      });
    }
  }

  return kruskalAlgorithm(edges, n);
};

console.log(minCostTunnel(input));
