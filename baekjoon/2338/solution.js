const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = require('fs').readFileSync(fp).toString().trim().split('\n').map(BigInt);

console.log(String(a + b));
console.log(String(a - b));
console.log(String(a * b));
