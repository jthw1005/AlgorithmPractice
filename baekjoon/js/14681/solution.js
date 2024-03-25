const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const [a, b] = input.split('\n').map((el) => +el);
let answer = null;
if (a > 0 && b > 0) answer = 1;
else if (a < 0 && b > 0) answer = 2;
else if (a < 0 && b < 0) answer = 3;
else answer = 4;
console.log(answer);
