const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const [a, b] = input.split(' ').map((el) => +el);
let answer = null;
if (a < b) answer = '<';
else if (a > b) answer = '>';
else answer = '==';

console.log(answer);
