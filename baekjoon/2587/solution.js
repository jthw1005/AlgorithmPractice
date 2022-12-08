const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

const sum = input.reduce((acc, cur) => acc + cur, 0);
const avg = Math.floor(sum / 5);
const mid = input.sort((a, b) => a - b)[2];

console.log([avg, mid].join('\n'));
