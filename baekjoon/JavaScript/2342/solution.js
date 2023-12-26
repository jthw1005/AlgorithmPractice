const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

input.pop();

// dpArr[left][right][currentIdx] - left, right : 0 ~ 4
const dpArr = Array.from(Array(5), () =>
  Array.from(Array(5), () => Array(input.length).fill(-1))
);

// 발 움직일 때 cost 계산
const getCost = (start, end) => {
  if (start === end) return 1;
  if (start === 0) return 2;
  if (Math.abs(start - end) === 2) return 4;
  return 3;
};

function solve(left, right, nextStepIdx) {
  // 마지막 인덱스에 도달하면 종료
  if (nextStepIdx === input.length) return 0;
  // dp memoization
  if (dpArr[left][right][nextStepIdx] !== -1) {
    return dpArr[left][right][nextStepIdx];
  }

  const next = input[nextStepIdx];

  // 역순으로 생각
  // ex) [1, 0, 1] or [0, 1, 1] -> [0, 0, 0] 으로 가는 최솟값 구하기
  dpArr[left][right][nextStepIdx] = Math.min(
    solve(next, right, nextStepIdx + 1) + getCost(left, next),
    solve(left, next, nextStepIdx + 1) + getCost(right, next)
  );

  return dpArr[left][right][nextStepIdx];
}

console.log(solve(0, 0, 0));
