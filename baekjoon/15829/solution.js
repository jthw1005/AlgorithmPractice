const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, str] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const ASCII_a = 96;
const M = 1234567891;
const R = 31;
let answer = 0;
let temp = 1;

for (let i = 0; i < str.length; i++) {
  answer += ((str[i].charCodeAt() - ASCII_a) * temp) % M;
  temp = (temp * R) % M;
}

console.log(answer % M);
