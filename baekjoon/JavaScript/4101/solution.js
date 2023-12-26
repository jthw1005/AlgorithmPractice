const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
    .readFileSync(fp)
    .toString()
    .trim()
    .split('\n')
    .map(v => v.split(' ').map(Number));

console.log(
    input
        .slice(0, input.length - 1)
        .map(([a, b]) => {
            if (a > b) {
                return 'Yes';
            } else {
                return 'No';
            }
        })
        .join('\n')
);
