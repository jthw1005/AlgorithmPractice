const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const [a, b] = input.split('\n');
const three = +a * +b[2];
const four = +a * +b[1];
const five = +a * +b[0];
const six = three + four * 10 + five * 100;

console.log(`${three}\n${four}\n${five}\n${six}\n`);
