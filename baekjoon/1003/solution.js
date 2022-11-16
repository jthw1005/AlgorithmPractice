const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...arr] = require('fs').readFileSync(filePath).toString().trim().split('\n');
const max = Math.max(...arr);

const dpArr = [
  [1, 0],
  [0, 1],
];

for (let i = 2; i <= max; i++) {
  dpArr.push([dpArr[i - 1][0] + dpArr[i - 2][0], dpArr[i - 1][1] + dpArr[i - 2][1]]);
}

let str = '';
for (let i = 0; i < +n; i++) {
  str += `${dpArr[arr[i]][0]} ${dpArr[arr[i]][1]}\n`;
}

console.log(str);
