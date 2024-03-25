const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const dx = [0, 1, 0, -1, 0];
const dy = [0, 0, 1, 0, -1];

const click = (board, x, y) => {
  for (let i = 0; i < 5; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10) {
      board[nx][ny] = board[nx][ny] === '#' ? 'O' : '#';
    }
  }
};

let ans = Infinity;

for (let mask = 0; mask < 1 << 10; mask++) {
  let tempBoard = input.map(row => row.split(''));
  let cnt = 0;

  for (let j = 0; j < 10; j++) {
    if (mask & (1 << j)) {
      click(tempBoard, 0, j);
      cnt++;
    }
  }

  for (let i = 1; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (tempBoard[i - 1][j] === 'O') {
        click(tempBoard, i, j);
        cnt++;
      }
    }
  }

  if (tempBoard[9].every(cell => cell === '#')) {
    ans = Math.min(ans, cnt);
  }
}

console.log(ans === Infinity ? -1 : ans);
