const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
const indegree = new Array(n + 1).fill(0);

const topologySort = (graph, indegree) => {
  const result = [];
  const queue = [];

  for (let i = 1; i < indegree.length; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    const cur = queue.shift();
    result.push(cur);
    for (let i = 0; i < graph[cur].length; i++) {
      const next = graph[cur][i];
      indegree[next]--;
      if (indegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  return result;
};

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  indegree[b]++;
}

const result = topologySort(graph, indegree);

console.log(result.join(' '));
