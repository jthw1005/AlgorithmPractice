const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, m] = require('fs').readFileSync(fp).toString().trim().split(' ').map(Number);

console.log(100 * n >= m ? 'Yes' : 'No');
