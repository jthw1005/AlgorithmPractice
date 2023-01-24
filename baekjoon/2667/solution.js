const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

// 입력 처리
const n = +input.shift();
const graph = [];
input.forEach((el) => {
  graph.push(el.split('').map(Number));
});

let cnt = 0;
const answer = [];
let numOfHouses = 0;

const solution = (i, j) => {
  // 범위에서 벗어나거나 값이 0이면 함수 종료
  if (i < 0 || j < 0 || i >= n || j >= n || !graph[i][j]) return;
  // 방문 처리
  graph[i][j] = 0;
  // 집 개수 카운트
  numOfHouses++;
  // 이웃집 체크
  [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ].forEach(([dy, dx]) => {
    solution(i + dy, j + dx);
  });
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j]) {
      cnt++;
      solution(i, j);
      answer.push(numOfHouses);
      numOfHouses = 0;
    }
  }
}

console.log(cnt + '\n' + answer.sort((n, p) => n - p).join('\n'));
