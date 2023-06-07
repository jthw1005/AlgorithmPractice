const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const map = Array.from({ length: N }, () => Array(M).fill(-1));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const queue = [];

for (let i = 1; i <= N; i++) {
  const row = input[i].split(' ').map(Number);
  for (let j = 0; j < M; j++) {
    if (row[j] === 0) map[i - 1][j] = 0;
    else if (row[j] === 2) {
      map[i - 1][j] = 0;
      queue.push([i - 1, j]);
    }
  }
}

while (queue.length > 0) {
  const [x, y] = queue.shift();
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
    if (map[nx][ny] === -1) {
      map[nx][ny] = map[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
}

map.forEach((row) => console.log(row.join(' ')));
