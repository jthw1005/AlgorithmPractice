const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const testCase = +input.shift();

const solution = (w, h, coordinates) => {
  const checkNeighbor = (y, x) => {
    // 좌표에서 벗어나거나 이미 방문한 경우 종료
    if (y < 0 || y > h - 1 || x < 0 || x > w - 1 || !data[y][x]) {
      return;
    }
    // 인근 지역 방문 표시
    data[y][x] = 0;
    // 인근 지역 방문
    [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ].forEach(([dy, dx]) => {
      checkNeighbor(y + dy, x + dx);
    });
  };

  // 배추 밭 만들기
  const data = Array.from({ length: h }, () => new Array(w).fill(0));
  // 배추 심기
  coordinates.forEach(([w, h]) => {
    data[h][w] = 1;
  });

  // 배추 군집 찾기
  let wormCnt = 0;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (data[i][j]) {
        // 배추 찾음
        wormCnt++;
        checkNeighbor(i, j);
      }
    }
  }

  return wormCnt;
};

const answer = [];

for (let i = 0; i < testCase; i++) {
  const [w, h, c] = input.shift().split(' ').map(Number);
  const coordinates = input.splice(0, c).map((v) => v.split(' ').map(Number));
  const result = solution(w, h, coordinates);
  answer.push(result);
}

console.log(answer.join('\n'));
