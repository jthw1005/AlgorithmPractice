const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

// n: 세로, m: 가로
const [n, m] = input.shift();
const answer = Array.from({ length: n }, () => new Array(m).fill(-1));
const queue = [];

// 2의 위치(시작점)를 찾는다.
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (input[i][j] === 0) {
      answer[i][j] = 0;
    } else if (input[i][j] === 2) {
      answer[i][j] = 0;
      queue.push([i, j]);
    }
  }
}

// 시작점을 기준으로 상하좌우로 이동한다.
const dr = [-1, 0, 1, 0];
const dc = [0, -1, 0, 1];

while (queue.length) {
  const [cR, cC] = queue.shift();
  for (let i = 0; i < 4; i++) {
    const [nR, nC] = [cR + dr[i], cC + dc[i]];
    if (nR < 0 || nC < 0 || nR >= n || nC >= m) {
      continue;
    }
    // 이전 값 + 1을 표시한다.
    if (answer[nR][nC] === -1) {
      answer[nR][nC] = answer[cR][cC] + 1;
      queue.push([nR, nC]);
    }
  }
}

console.log(answer.map((v) => v.join(' ')).join('\n'));
