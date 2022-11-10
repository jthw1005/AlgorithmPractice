const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './1076.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const table = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

console.log((table[input[0]] * 10 + table[input[1]]) * 10 ** table[input[2]]);
