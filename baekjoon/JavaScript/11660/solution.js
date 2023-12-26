const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[N, M], ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const graph = input.splice(0, N);

/**
 * N: length of graph
 * M: number of input
 */

const dpTable = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    dpTable[i][j] =
      dpTable[i - 1][j] + dpTable[i][j - 1] - dpTable[i - 1][j - 1] + graph[i - 1][j - 1];
  }
}

const answer = [];
input.forEach((el) => {
  const [x1, y1, x2, y2] = el;
  const result =
    dpTable[x2][y2] - dpTable[x2][y1 - 1] - dpTable[x1 - 1][y2] + dpTable[x1 - 1][y1 - 1];
  answer.push(result);
});

console.log(answer.join('\n'));
