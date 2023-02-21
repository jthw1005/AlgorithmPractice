const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');
const [n, m] = input.shift().split(' ');
const arr = input.map((v) => v.split(' ').map(Number));

const visited = Array.from({ length: n }, () => new Array(m).fill(false));
const d = [1, 0, 0, 1, -1, 0];
let answer = 0;

const solution = (row, col, sum, cnt) => {
  if (cnt === 4) return (answer = Math.max(answer, sum));

  for (let i = 0; i < 3; i++) {
    const [nR, nC] = [row + d[i * 2], col + d[i * 2 + 1]];
    if (nR >= n || nR < 0 || nC >= m || nC < 0 || visited[nR][nC]) continue;
    visited[nR][nC] = true;
    solution(nR, nC, sum + arr[nR][nC], cnt + 1);
    if (cnt === 2) solution(row, col, sum + arr[nR][nC], cnt + 1);
    visited[nR][nC] = false;
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    visited[i][j] = true;
    solution(i, j, arr[i][j], 1);
    visited[i][j] = false;
  }
}

console.log(Math.max(answer));
