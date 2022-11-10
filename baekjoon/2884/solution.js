const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

let [h, m] = input.split(' ').map((el) => +el);

if (m < 45) {
  h = h === 0 ? 23 : h - 1;
  m += 15;
} else {
  m -= 45;
}

console.log(`${h} ${m}`);
