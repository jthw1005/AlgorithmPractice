const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');
const T = +input[0];
const answer = [];
const types = [
  'INTJ',
  'INTP',
  'INFJ',
  'INFP',
  'ISTJ',
  'ISTP',
  'ISFJ',
  'ISFP',
  'ENTJ',
  'ENTP',
  'ENFJ',
  'ENFP',
  'ESTJ',
  'ESTP',
  'ESFJ',
  'ESFP',
];

const getDistance = (a, b) => {
  let dist = 0;
  for (let i = 0; i < 4; i++) {
    if (a[i] !== b[i]) dist++;
  }
  return dist;
};

const solution = (n, data) => {
  const mbti = Array(16).fill(0);
  let min = Infinity;

  for (let j = 0; j < n; j++) {
    mbti[types.indexOf(data[j])]++;
  }

  for (let j = 0; j < 16; j++) {
    if (mbti[j] >= 3) {
      min = 0;
      break;
    } else if (mbti[j] === 2) {
      for (k = 0; k < 16; k++) {
        if (mbti[k] && j !== k) {
          min = Math.min(min, getDistance(types[j], types[k]) * 2);
        }
      }
    } else if (mbti[j] === 1) {
      for (k = j + 1; k < 16; k++) {
        if (mbti[k] >= 1) {
          for (let l = k + 1; l < 16; l++) {
            if (mbti[l] >= 1) {
              min = Math.min(
                min,
                getDistance(types[j], types[k]) +
                  getDistance(types[j], types[l]) +
                  getDistance(types[k], types[l])
              );
            }
          }
        }
      }
    }
  }

  return min;
};

for (let i = 0; i < T; i++) {
  const result = solution(+input[i * 2 + 1], input[i * 2 + 2].split(' '));
  answer.push(result);
}

console.log(answer.join('\n'));
