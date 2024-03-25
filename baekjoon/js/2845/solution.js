const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[a, b], input] = require('fs')
    .readFileSync(fp)
    .toString()
    .trim()
    .split('\n')
    .map(v => v.split(' ').map(Number));

console.log(input.map(v => v - a * b).join(' '));
