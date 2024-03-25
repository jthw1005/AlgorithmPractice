const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
const indegree = Array(N + 1).fill(0);

for (let i = 1; i <= M; i++) {
  const order = input[i].split(' ').map(Number);
  for (let j = 2; j <= order[0]; j++) {
    graph[order[j - 1]].push(order[j]);
    indegree[order[j]]++;
  }
}

function topologicalSort() {
  let result = [];
  let queue = [];

  for (let i = 1; i <= N; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const current = queue.shift();
    result.push(current);
    for (let next of graph[current]) {
      indegree[next]--;
      if (indegree[next] === 0) queue.push(next);
    }
  }

  if (result.length !== N) return [0];
  return result;
}

const result = topologicalSort();
console.log(result.join('\n'));
