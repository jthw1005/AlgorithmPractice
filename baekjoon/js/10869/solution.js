const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const [a, b] = input.split(' ').map((el) => +el);
console.log(`${a + b}\n${a - b}\n${a * b}\n${Math.floor(a / b)}\n${a % b}\n `);
