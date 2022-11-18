const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();

const dpArr = [null, 0, 1, 1];

for (let i = 4; i <= input; i++) {
  const arr = [dpArr[i - 1]];
  if (i % 3 === 0) {
    arr.push(dpArr[i / 3]);
  }
  if (i % 2 === 0) {
    arr.push(dpArr[i / 2]);
  }
  dpArr[i] = 1 + Math.min(...arr);
}

console.log(dpArr[input]);
