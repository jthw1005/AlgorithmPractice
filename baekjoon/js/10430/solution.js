const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const [A, B, C, D] = input.split(' ').map((el) => +el);
console.log(
  `${(A + B) % C}\n${((A % C) + (B % C)) % C}\n${(A * B) % C}\n${((A % C) * (B % C)) % C}\n`
);
