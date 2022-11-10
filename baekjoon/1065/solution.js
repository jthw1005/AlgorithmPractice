const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const num = +input;
let answer = 0;

const isArithmeticSequence = (num) => {
  const str = num + '';
  if (str.length <= 2) return true;
  const gap = str[1] - str[0];
  for (let i = 1; i < str.length - 1; i++) {
    if (str[i + 1] - str[i] !== gap) return false;
  }
  return true;
};

if (num <= 99) {
  answer = num;
} else {
  answer = 99;
  for (let i = 100; i <= num && i < 1000; i++) {
    if (isArithmeticSequence(i)) answer++;
  }
}

console.log(answer);
