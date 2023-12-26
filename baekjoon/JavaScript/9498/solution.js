const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const num = +input;
let answer = null;
if (num >= 90) answer = 'A';
else if (num >= 80) answer = 'B';
else if (num >= 70) answer = 'C';
else if (num >= 60) answer = 'D';
else answer = 'F';
console.log(answer);
