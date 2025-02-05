const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n')
  .map(el => el.split(' '));

const gradeMapper = {
  'A+': 4.5,
  A0: 4.0,
  'B+': 3.5,
  B0: 3.0,
  'C+': 2.5,
  C0: 2.0,
  'D+': 1.5,
  D0: 1.0,
  F: 0.0,
};

let sum = 0;
let totalGrade = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i][2] === 'P') {
    continue;
  }

  sum = sum + Number(input[i][1]) * gradeMapper[input[i][2]];
  totalGrade = totalGrade + Number(input[i][1]);
}

console.log((sum / totalGrade).toFixed(6));
