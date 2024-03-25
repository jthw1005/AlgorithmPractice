const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, m], ...input] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const graph = Array.from({ length: n + 1 }, () => []);
const visited = Array.from({ length: n + 1 }, () => false);

let answer = 0;

for (let i = 0; i < m; i++) {
  const [u, v] = input[i];
  graph[u].push(v);
  graph[v].push(u);
}

const dfs = (node) => {
  visited[node] = true;
  for (const el of graph[node]) {
    if (visited[el]) continue;
    dfs(el);
  }
};

for (let i = 1; i <= n; i++) {
  if (visited[i]) continue;
  dfs(i);
  answer++;
}

console.log(answer);

// Union Find
// const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const [[n, m], ...graph] = require('fs')
//   .readFileSync(fp)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((v) => v.split(' ').map(Number));

// const getParent = (x, parent) => {
//   if (parent[x] === x) return x;
//   return getParent(parent[x], parent);
// };

// const unionParent = (x, y, parent) => {
//   const parentOfX = getParent(x, parent);
//   const parentOfY = getParent(y, parent);
//   if (parentOfX === parentOfY) return;
//   if (parentOfX < parentOfY) return (parent[parentOfY] = parentOfX);
//   return (parent[parentOfX] = parentOfY);
// };

// const solution = (n, m, graph) => {
//   const parent = Array.from({ length: n + 1 }, (_, i) => i);

//   for (let vertice of graph) {
//     const [u, v] = vertice;
//     if (getParent(u, parent) === getParent(v, parent)) continue;
//     unionParent(u, v, parent);
//   }

//   const answer = parent.reduce((acc, _, idx) => {
//     if (idx === parent[idx]) acc++;
//     return acc;
//   }, -1);

//   return answer;
// };

// console.log(solution(n, m, graph));
