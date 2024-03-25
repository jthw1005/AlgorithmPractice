const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const n = +input[0];
const tree = Array.from(Array(n + 1), () => []);
for (let i = 1; i < n; i++) {
  const [node1, node2, dist] = input[i].split(' ').map((v) => +v);
  tree[node1].push({ to: node2, dist: dist });
  tree[node2].push({ to: node1, dist: dist });
}

console.log(tree);

let visit = Array(n + 1).fill(false);
let distance = Array(n + 1).fill(0);

function dfs(start) {
  visit[start] = true;
  for (let i = 0; i < tree[start].length; i++) {
    const next = tree[start][i].to;
    const nextDist = tree[start][i].dist;
    if (!visit[next]) {
      distance[next] = distance[start] + nextDist;
      dfs(next);
    }
  }
}

dfs(1);
let start = 1;
for (let i = 2; i <= n; i++) {
  if (distance[i] > distance[start]) {
    start = i;
  }
}

visit = Array(n + 1).fill(false);
distance = Array(n + 1).fill(0);
dfs(start);

console.log(Math.max(...distance));
