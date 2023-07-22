const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [m, n] = require('fs').readFileSync(fp).toString().trim().split(' ').map(BigInt);

// console.log(String(m / n), '\n', String(m % n));
console.log([String(m / n), String(m % n)].join('\n'));
