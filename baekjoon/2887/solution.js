const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const getParent = (parent, x) => {
  if (parent[x] === x) return x;
  return (parent[x] = getParent(parent, parent[x]));
};

const unionParent = (parent, a, b) => {
  a = getParent(parent, a);
  b = getParent(parent, b);

  if (a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
};

const kruskalAlgorithm = (edges, n) => {
  let parent = [];
  let result = 0;

  for (let i = 1; i <= n; i++) {
    parent[i] = i;
  }

  edges.sort((a, b) => a.cost - b.cost);

  for (let edge of edges) {
    let cost = edge.cost;
    let a = edge.a;
    let b = edge.b;

    if (getParent(parent, a) !== getParent(parent, b)) {
      unionParent(parent, a, b);
      result += cost;
    }
  }

  return result;
};

const minCostTunnel = (coordinates) => {
  let n = coordinates.length;
  let edges = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let cost = Math.min(
        Math.abs(coordinates[i][0] - coordinates[j][0]),
        Math.abs(coordinates[i][1] - coordinates[j][1]),
        Math.abs(coordinates[i][2] - coordinates[j][2])
      );

      edges.push({ a: i + 1, b: j + 1, cost: cost });
    }
  }

  return kruskalAlgorithm(edges, n);
};

console.log(minCostTunnel(input));
