const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const n = +input[0];
const arr = input[1].split(' ').map(Number);

const dp1 = [arr[0]];
const dp2 = [arr[0]];

for (let i = 1; i < n; i++) {
  dp1[i] = Math.max(dp1[i - 1] + arr[i], arr[i]);
}

for (let i = 1; i < n; i++) {
  dp2[i] = Math.max(dp1[i - 1], dp2[i - 1] + arr[i]);
}

console.log(Math.max(...dp1, ...dp2));

/**
 * 이 문제는 기존 연속합 문제에서 중간에 숫자 하나를 지울 수 있는 조건이
 * 추가된 문제이다.
 *
 * 기존 연속합 문제에서처럼 dp1을 먼저 구하고
 * 이를 바탕으로 dp2를 구한다.
 *
 * 이 때, dp2는 이미 삭제가 이뤄진 배열이라고 생각하면 된다. 다시 말해서
 * 지금까지 한 번도 삭제가 이뤄지지 않았다면, 현재 인덱스에 해당하는 숫자를 삭제해야 하고
 * 이전에 삭제가 이뤄졌었다면, 현재 인덱스에 해당하는 숫자는 무조건 더해야 한다.
 * 위 두 가지 방법을 통해 나온 숫자 중 큰 수를 저장한다.
 */
