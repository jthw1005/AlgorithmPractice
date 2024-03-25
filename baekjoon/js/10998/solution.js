const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const [a, b] = input.split(' ');
console.log(a * b);
