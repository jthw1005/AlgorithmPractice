const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n').map(Number);

const sum = input.reduce((acc, cur, idx) => {
    if (cur < 40) {
        return acc + 40;
    } else {
        return acc + cur;
    }
}, 0);

console.log(sum / 5);
