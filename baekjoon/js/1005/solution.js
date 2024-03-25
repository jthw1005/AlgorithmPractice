const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');
const T = +input.splice(0, 1);

const solution = (N, K, order, times, dest) => {
  const graph = Array.from({ length: N + 1 }, () => []);
  const indegree = Array.from({ length: N + 1 }, () => 0);
  const dpTable = [0, ...times];
  const queue = [];

  for (const [start, end] of order) {
    graph[start].push(end);
    indegree[end]++;
  }

  for (let i = 1; i <= N; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    const curr = queue.shift();
    for (let el of graph[curr]) {
      indegree[el]--;
      if (indegree[el] === 0) {
        queue.push(el);
      }
      dpTable[el] = Math.max(dpTable[el], dpTable[curr] + times[el - 1]);
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
