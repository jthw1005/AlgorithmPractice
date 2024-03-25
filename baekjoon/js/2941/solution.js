const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const obj = {
  'c=': true,
  'c-': true,
  'dz=': true,
  'd-': true,
  lj: true,
  nj: true,
  's=': true,
  'z=': true,
};
let pointer = 0;
let answer = 0;

while (pointer < input.length) {
  if (obj[input.substring(pointer, pointer + 3)]) {
    pointer += 3;
  } else if (obj[input.substring(pointer, pointer + 2)]) {
    pointer += 2;
  } else {
    pointer += 1;
  }
  answer++;
}

console.log(answer);
