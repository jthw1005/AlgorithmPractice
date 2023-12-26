const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const solution = (v, arr) => {
  // 방문 한 경우 - 1 또는 2, 방문 안 한 경우 - false
  const visited = new Array(v).fill(false);

  // vertex와 edge 정리
  const graph = Array.from({ length: v }, () => []);
  arr.forEach(([v1, v2]) => {
    graph[v1 - 1].push(v2);
    graph[v2 - 1].push(v1);
  });

  // 본 로직
  for (let i = 1; i <= v; i++) {
    // 이미 방문한 경우 종료
    if (visited[i - 1]) continue;
    visited[i - 1] = 1;
    const stack = [i];
    while (stack.length) {
      const curr = stack.pop();
      for (let neighbor of graph[curr - 1]) {
        if (visited[neighbor - 1]) {
          // 이전과 다르면 continue
          if (visited[neighbor - 1] !== visited[curr - 1]) continue;
          // 이전과 같으면 종료
          else return 'NO';
        } else {
          // 방문 안 했으면 방문 표시
          stack.push(neighbor);
          visited[neighbor - 1] = visited[curr - 1] === 1 ? 2 : 1;
        }
      }
    }
  }
  return 'YES';
};

const testCase = +input.shift();
const answer = [];
for (let i = 0; i < testCase; i++) {
  const [v, e] = input.shift().split(' ').map(Number);
  const arr = input.splice(0, e).map((v) => v.split(' ').map(Number));
  answer.push(solution(v, arr));
}
console.log(answer.join('\n'));
