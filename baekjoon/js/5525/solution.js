const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const N = +input[0];
const M = +input[1];
const s = input[2];

const createPn = (n) => {
  let result = 'I';
  for (let i = 0; i < n; i++) {
    result += 'OI';
  }
  return result;
};

const solution = (N, M, s) => {
  const pn = createPn(N);
  const len = pn.length;
  let find = false;
  let i = 0;
  let answer = 0;
  while (i < M) {
    // 일치하는거 찾은 경우
    if (find) {
      // 뒤에가 OI인 경우
      if (s[i] === 'O' && s[i + 1] === 'I') {
        answer++;
        i = i + 2;
        // 뒤에가 OI가 아닌 경우
      } else {
        find = false;
      }
      // 일치하는거 못 찾은 경우
    } else {
      // 현재 문자가 I인 경우
      if (s[i] === 'I') {
        // 일치 여부 체크
        let pass = false;
        for (let j = 0; j < len; j++) {
          if (s[i + j] !== pn[j]) {
            // 일치하지 않는 경우
            i = i + j;
            pass = true;
            break;
          }
        }
        // 일치하는 경우
        if (!pass) {
          answer++;
          find = true;
          i = i + len;
        }
        // 현재 문자가 I가 아닌 경우
      } else {
        i = i + 1;
      }
    }
  }
  return answer;
};

console.log(solution(N, M, s));
