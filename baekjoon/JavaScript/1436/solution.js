const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();

let cnt = 1;
let num = 666;
while (cnt !== input) {
  num++;
  if ((num + '').includes('666')) {
    cnt++;
  }
}

console.log(num);
