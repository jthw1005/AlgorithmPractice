const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(fp).toString().trim();

console.log('long '.repeat(input / 4) + 'int');
