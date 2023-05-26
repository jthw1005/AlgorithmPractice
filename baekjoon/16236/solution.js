const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n');

const map = input.map((v) => v.split(' ').map(Number));

const solution = (n, map) => {
  let numOfLeftPrey = 0;
  let numOfEatenPrey = 0;
  let sharkRow, sharkCol;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] === 9) {
        sharkRow = i;
        sharkCol = j;
        map[i][j] = 0;
      } else if (map[i][j] > 0) {
        numOfLeftPrey++;
      }
    }
  }

  let visited = Array.from({ length: n }, () => Array(n).fill(0));
  let time = 1;
  let totalTime = 0;
  let sharksize = 2;
  let numOfLeftLoof = 1;

  const queue = [[sharkRow, sharkCol, -1]];
  const dr = [-1, 0, 0, 1];
  const dc = [0, -1, 1, 0];

  while (queue.length && numOfLeftPrey > 0) {
    const [curRow, curCol, curTime] = queue.shift();

    if (map[curRow][curCol] > 0 && map[curRow][curCol] < sharksize) {
      visited = Array.from({ length: n }, () => Array(n).fill(0));
      totalTime = totalTime + curTime;
      time = 1;
      numOfEatenPrey++;
      numOfLeftPrey--;
      if (sharksize === numOfEatenPrey) {
        numOfEatenPrey = 0;
        sharksize++;
      }
      queue.length = 0;
      queue.push([curRow, curCol, -1]);
      map[curRow][curCol] = 0;
      numOfLeftLoof = 1;
      continue;
    }

    numOfLeftLoof--;
    for (let i = 0; i < 4; i++) {
      const nextRow = curRow + dr[i];
      const nextCol = curCol + dc[i];

      if (
        nextRow < 0 ||
        nextRow >= n ||
        nextCol < 0 ||
        nextCol >= n ||
        map[nextRow][nextCol] > sharksize ||
        visited[nextRow][nextCol]
      ) {
        continue;
      }

      visited[nextRow][nextCol] = 1;
      queue.push([nextRow, nextCol, time]);
    }

    if (!numOfLeftLoof) {
      time++;
      numOfLeftLoof = queue.length;
      queue.sort((n, p) => {
        if (n[0] !== p[0]) return n[0] - p[0];
        else return n[1] - p[1];
      });
    }
  }

  return totalTime;
};

console.log(solution(+n, map));
