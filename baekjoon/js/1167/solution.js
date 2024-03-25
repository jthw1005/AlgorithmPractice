const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n');

const graph = Array.from({ length: +n + 1 }, () => []);

for (let i = 0; i < +n; i++) {
  const [start, ...tempArr] = input[i].split(' ').map(Number);
  for (let j = 0; j < (tempArr.length - 1) / 2; j++) {
    graph[start].push({
      next: tempArr[j * 2],
      dist: tempArr[j * 2 + 1],
    });
  }
}

let distArr = Array.from({ length: +n + 1 }, () => 0);
let visited = Array.from({ length: +n + 1 }, () => false);

const dfs = (start) => {
  visited[start] = true;
  for (const { next, dist } of graph[start]) {
    if (visited[next]) continue;
    distArr[next] = distArr[start] + dist;
    dfs(next);
  }
};

dfs(1);

let maxIdx = 1;

for (let i = 2; i <= n; i++) {
  if (distArr[maxIdx] < distArr[i]) {
    maxIdx = i;
  }
}

distArr = Array.from({ length: +n + 1 }, () => 0);
visited = Array.from({ length: +n + 1 }, () => false);

dfs(maxIdx);

console.log(Math.max(...distArr));
