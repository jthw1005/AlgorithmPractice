const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const T = Number(input[0]);
let index = 1;

for (let i = 0; i < T; i++) {
  const N = Number(input[index++]);
  const people = input[index++].split(' ');
  const mbti = Array(16).fill(0);
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
  let min = Infinity;

  for (let j = 0; j < N; j++) {
    mbti[types.indexOf(people[j])]++;
  }

  for (let j = 0; j < 16; j++) {
    if (mbti[j] >= 3) {
      min = 0;
      break;
    }
    for (let k = j + 1; k < 16; k++) {
      if (mbti[k] >= 2) {
        min = Math.min(min, getDistance(types[j], types[k]) * 2);
      } else if (mbti[k] >= 1) {
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
  console.log(min);
}

function getDistance(a, b) {
  let dist = 0;
  for (let i = 0; i < 4; i++) {
    if (a[i] !== b[i]) dist++;
  }
  return dist;
}
