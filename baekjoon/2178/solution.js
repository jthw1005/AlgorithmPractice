const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const graph = [];
input.forEach((el) => {
  graph.push(el.split('').map(Number));
});
const visited = Array.from({ length: n }, () => new Array(m).fill(0));

visited[0][0] = 1;
const queue = [[0, 0]];
while (queue.length) {
  const [curRow, curCol] = queue.shift();
  if (curRow === n - 1 && curCol === m - 1) break;
  [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ].forEach(([dr, dc]) => {
    if (
      curRow + dr < 0 ||
      curRow + dr >= n ||
      curCol + dc < 0 ||
      curCol + dc >= m ||
      visited[curRow + dr][curCol + dc] ||
      !graph[curRow + dr][curCol + dc]
    ) {
      return;
    }
    queue.push([curRow + dr, curCol + dc]);
    visited[curRow + dr][curCol + dc] = visited[curRow][curCol] + 1;
  });
}

console.log(visited[n - 1][m - 1]);
