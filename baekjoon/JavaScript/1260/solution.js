const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, m, v], ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const graphs = Array.from({ length: n }, () => []);
input.forEach((el) => {
  const [v1, v2] = el;
  graphs[v1 - 1].push(v2);
  graphs[v2 - 1].push(v1);
});
graphs.forEach((_, idx, arr) => {
  arr[idx].sort((n, p) => n - p);
});

const getDFSOrder = (startVertex) => {
  const resultArr = [];
  const visited = new Array(n).fill(false);
  const innerFunc = (vertex) => {
    visited[vertex - 1] = true;
    resultArr.push(vertex);
    for (let neighbor of graphs[vertex - 1]) {
      if (visited[neighbor - 1]) continue;
      innerFunc(neighbor);
    }
  };
  innerFunc(startVertex);
  return resultArr;
};

const getBFSOrder = (startVertex) => {
  const resultArr = [];
  const visited = new Array(n).fill(false);
  const queue = [startVertex];
  visited[startVertex - 1] = true;

  while (queue.length) {
    const currVertex = queue.shift();
    resultArr.push(currVertex);
    for (let neighbor of graphs[currVertex - 1]) {
      if (visited[neighbor - 1]) continue;
      queue.push(neighbor);
      visited[neighbor - 1] = true;
    }
  }
  return resultArr;
};

console.log(getDFSOrder(v).join(' ') + '\n' + getBFSOrder(v).join(' '));
