const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const visited = Array.from({ length: N }, () => new Array(M).fill(false));
const queue = [];
const data = input.map((v) => v.split(''));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (data[i][j] === 'I') {
      queue.push([i, j]);
      visited[i][j] = true;
      break;
    }
  }
}

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];
let answer = 0;

while (queue.length) {
  const [cR, cC] = queue.pop();
  for (let i = 0; i < 4; i++) {
    const [nR, nC] = [cR + dr[i], cC + dc[i]];
    if (
      nR < 0 ||
      nR >= N ||
      nC < 0 ||
      nC >= M ||
      visited[nR][nC] ||
      data[nR][nC] === 'X'
    ) {
      continue;
    }
    if (data[nR][nC] === 'P') {
      answer++;
    }
    visited[nR][nC] = true;
    queue.push([nR, nC]);
  }
}

console.log(answer ? answer : 'TT');
