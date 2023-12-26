// MEMO: 230629에 node.js로 해당 문제 풀이 불가

const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const dpArr = [
  ...input[1].split(' ').map(Number),
  ...input[1].split(' ').map(Number),
];

for (let i = 2; i <= +input[0]; i++) {
  const [a, b, c] = input[i].split(' ').map(Number);

  const temp0 = dpArr[0];
  const temp1 = dpArr[1];
  const temp2 = dpArr[2];
  const temp3 = dpArr[3];
  const temp4 = dpArr[4];
  const temp5 = dpArr[5];

  dpArr[0] = a + Math.max(temp0, temp1);
  dpArr[1] = b + Math.max(temp0, temp1, temp2);
  dpArr[2] = c + Math.max(temp1, temp2);

  dpArr[3] = a + Math.min(temp3, temp4);
  dpArr[4] = b + Math.min(temp3, temp4, temp5);
  dpArr[5] = c + Math.min(temp4, temp5);
}

console.log(Math.max(...dpArr.slice(0, 3)), Math.min(...dpArr.slice(3)));
