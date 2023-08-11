const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('');

const isCapital = char => {
    return char === char.toUpperCase();
};

console.log(
    input
        .map(v => {
            if (isCapital(v)) {
                return v.toLowerCase();
            } else {
                return v.toUpperCase();
            }
        })
        .join('')
);
