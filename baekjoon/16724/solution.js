const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const map = input.slice(1).map(row => row.split(''));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const direction = { U: 0, D: 1, L: 2, R: 3 };
const visited = Array.from(Array(N), () => Array(M).fill(0));

const dfs = (x, y, id) => {
  if (visited[x][y]) {
    return visited[x][y] === id;
  }

  visited[x][y] = id;
  const nx = x + dx[direction[map[x][y]]];
  const ny = y + dy[direction[map[x][y]]];

  return dfs(nx, ny, id);
};

const solve = () => {
  let safeZones = 0;
  let id = 1;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!visited[i][j]) {
        if (dfs(i, j, id)) {
          safeZones++;
        }
        id++;
      }
    }
  }

  return safeZones;
};

console.log(solve());
