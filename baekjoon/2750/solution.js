const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

input.shift();
console.log(input.sort((n, p) => n - p).join('\n'));
