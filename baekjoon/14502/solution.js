const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, m], ...data] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const candidate = [];

const solution = (data) => {
  // deep copy
  const arr = [];
  for (let i = 0; i < data.length; i++) {
    arr[i] = [...data[i]];
  }

  // virus diffusion
  const virus = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 2) {
        virus.push([i, j]);
      }
    }
  }

  while (virus.length) {
    const [row, col] = virus.pop();
    [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ].forEach(([dr, dc]) => {
      const nextRow = row + dr;
      const nextCol = col + dc;
      if (
        nextRow < 0 ||
        nextRow >= n ||
        nextCol < 0 ||
        nextCol >= m ||
        arr[nextRow][nextCol] === 2 ||
        arr[nextRow][nextCol] === 1
      ) {
        return;
      }
      arr[nextRow][nextCol] = 2;
      virus.push([nextRow, nextCol]);
    });
  }

  // count non virus area
  let zero = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 0) {
        zero++;
      }
    }
  }

  return zero;
};

for (let i = 0; i < n * m - 2; i++) {
  const ir = Math.floor(i / m);
  const ic = i % m;
  if (data[ir][ic] !== 0) continue;
  for (let j = i + 1; j < n * m - 1; j++) {
    const jr = Math.floor(j / m);
    const jc = j % m;
    if (data[jr][jc] !== 0) continue;
    for (k = j + 1; k < n * m; k++) {
      const kr = Math.floor(k / m);
      const kc = k % m;
      if (data[kr][kc] !== 0) continue;
      data[ir][ic] = 1;
      data[jr][jc] = 1;
      data[kr][kc] = 1;
      candidate.push(solution(data));
      data[ir][ic] = 0;
      data[jr][jc] = 0;
      data[kr][kc] = 0;
    }
  }
}

console.log(Math.max(...candidate));
