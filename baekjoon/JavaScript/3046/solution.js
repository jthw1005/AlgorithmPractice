const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [R1, S] = require('fs').readFileSync(fp).toString().trim().split(' ').map(Number);

console.log(2 * S - R1);
