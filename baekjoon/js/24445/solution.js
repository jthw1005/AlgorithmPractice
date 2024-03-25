const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, m, r], ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const graph = Array.from({ length: n }, () => []);
input.forEach(([v1, v2]) => {
  graph[v1 - 1].push(v2);
  graph[v2 - 1].push(v1);
});
graph.forEach((_, idx, arr) => {
  arr[idx].sort((n, p) => p - n);
});

const getBFSOrder = (startVertex) => {
  let cnt = 0;
  const resultArr = new Array(n).fill(0);
  const visited = new Array(n).fill(false);
  const queue = [startVertex];
  visited[startVertex - 1] = true;

  while (queue.length) {
    const currVertex = queue.shift();
    resultArr[currVertex - 1] = ++cnt;
    for (let neighbor of graph[currVertex - 1]) {
      if (visited[neighbor - 1]) continue;
      queue.push(neighbor);
      visited[neighbor - 1] = true;
    }
  }
  return resultArr;
};

console.log(getBFSOrder(r).join('\n'));
