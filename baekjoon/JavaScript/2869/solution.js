const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const [a, b, v] = input.split(' ').map((el) => +el);
console.log(Math.ceil((v - a) / (a - b)) + 1);
