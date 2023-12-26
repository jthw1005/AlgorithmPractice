const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const num = +input;
let answer = 0;
if (num % 400 === 0 || (num % 4 === 0 && num % 100 !== 0)) answer = 1;
console.log(answer);
