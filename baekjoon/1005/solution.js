const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');
const T = +input.splice(0, 1);

const solution = (N, K, order, times, dest) => {
  const graph = Array.from({ length: N + 1 }, () => []);
  const reverseGraph = Array.from({ length: N + 1 }, () => []);
  const indegree = Array.from({ length: N }, () => 0);
  const dpTable = Array.from({ length: N + 1 }, () => 0);
  const queue = [];

  for (const [start, end] of order) {
    graph[start].push(end);
    reverseGraph[end].push(start);
    indegree[end - 1]++;
  }

  for (let i = 0; i < N; i++) {
    if (indegree[i] === 0) {
      queue.push(i + 1);
    }
  }

  while (queue.length) {
    const curr = queue.shift();
    let max = -Infinity;
    for (let el of graph[curr]) {
      indegree[el - 1]--;
      if (indegree[el - 1] === 0) {
        queue.push(el);
      }
    }

    if (reverseGraph[curr].length === 0) {
      dpTable[curr] = times[curr - 1];
    } else {
      dpTable[curr] =
        Math.max(...reverseGraph[curr].map((v) => dpTable[v])) +
        times[curr - 1];
    }
  }

  return dpTable[dest];
};

for (let i = 0; i < T; i++) {
  const [N, K] = input.shift().split(' ').map(Number);
  const data = input.splice(0, K + 2);
  const times = data.shift().split(' ').map(Number);
  const dest = +data.pop();
  const order = data.map((v) => v.split(' ').map(Number));
  console.log(solution(N, K, order, times, dest));
}
