const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(fp).toString().trim();

const dpArr = Array.from({ length: input + 1 }, () => 0);

for (let i = 1; i <= input; i++) {
  const limitSquare = Math.floor(Math.sqrt(i));

  let minVal = Infinity;
  for (j = 1; j <= limitSquare; j++) {
    if (dpArr[i - j ** 2] < minVal) {
      minVal = dpArr[i - j ** 2];
    }
  }
  dpArr[i] = minVal + 1;
}

console.log(dpArr[input]);
