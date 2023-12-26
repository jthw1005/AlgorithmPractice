const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(fp).toString().trim();

const dpArr = Array.from({ length: input + 1 }, () => 1);

for (let i = 2; i <= input; i++) {
  dpArr[i] = (dpArr[i - 1] + dpArr[i - 2] * 2) % 10007;
}

console.log(dpArr[input]);
