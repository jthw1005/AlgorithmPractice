const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();

const dpArr = new Array(input);
dpArr[0] = 1;
dpArr[1] = 2;

for (let i = 2; i < input; i++) {
  dpArr[i] = (dpArr[i - 1] + dpArr[i - 2]) % 10007;
}

console.log(dpArr[input - 1]);
