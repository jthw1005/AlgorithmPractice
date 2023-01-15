const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const date = new Date();
console.log(date.toISOString().slice(0, 10));
