const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n').map(Number);

console.log(
    input.reduce((acc, cur) => {
        return acc + cur;
    }, 0)
);
