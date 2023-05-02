const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [rc, ...input] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n');

const [R, C] = rc.split(' ').map(Number);
const graph = input.map((v) => v.split(''));

const getIdx = (char) => char.charCodeAt() - 65;

const solution = (R, C, graph) => {
  const visited = Array.from({ length: 26 }, () => false);
  visited[getIdx(graph[0][0])] = true;
  let maxLength = 1;
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];

  const dfsRec = (row, col, length) => {
    if (maxLength < length) maxLength = length;
    for (let i = 0; i < 4; i++) {
      const nR = row + dr[i];
      const nC = col + dc[i];
      if (nR < 0 || nR >= R || nC < 0 || nC >= C) continue;
      const idx = getIdx(graph[nR][nC]);
      if (visited[idx]) continue;
      visited[idx] = true;
      dfsRec(nR, nC, length + 1);
      visited[idx] = false;
    }
  };
  dfsRec(0, 0, 1);

  return maxLength;
};

console.log(solution(R, C, graph));
