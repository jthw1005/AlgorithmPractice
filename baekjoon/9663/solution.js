const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const N = +require('fs').readFileSync(filePath).toString().trim();

const solution = (N) => {
  // 정답 개수
  let numOfAnswer = 0;
  // 체스 보드
  const boardState = Array.from({ length: N }, () => new Array(N).fill(0));

  // innerFunc
  const recursiveFunc = (currRow) => {
    if (currRow === N) {
      return numOfAnswer++;
    }

    for (let i = 0; i < N; i++) {
      // 현재 row의 요소들 중 false 표기인 것들은 경우의 수에서 제외
      if (boardState[currRow][i] < 0) continue;

      // 보드판에 queen(currRow, i) 영역 표시
      for (let j = currRow + 1; j < N; j++) {
        boardState[j][i]--;
      }
      [
        [1, 1],
        [-1, 1],
      ].forEach((increment) => {
        let y = currRow;
        let x = i;
        const [dx, dy] = increment;
        while (y >= 0 && y < N && x >= 0 && x < N) {
          boardState[y][x]--;
          y += dy;
          x += dx;
        }
      });

      // 함수 호출
      recursiveFunc(currRow + 1);

      // 보드판에 queen(currRow, i) 영역 표시 지우기
      for (let j = currRow + 1; j < N; j++) {
        boardState[j][i]++;
      }
      [
        [1, 1],
        [-1, 1],
      ].forEach((increment) => {
        let y = currRow;
        let x = i;
        const [dx, dy] = increment;
        while (y >= 0 && y < N && x >= 0 && x < N) {
          boardState[y][x]++;
          y += dy;
          x += dx;
        }
      });
    }
  };

  recursiveFunc(0);

  return numOfAnswer;
};

console.log(solution(N));
