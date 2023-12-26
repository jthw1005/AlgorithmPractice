const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const n = Number(input[0]);
const liquids = input[1]
  .split(' ')
  .map(Number)
  .sort((n, p) => n - p);

let answer = [liquids[0], liquids[1], liquids[2]];
let minSum = Math.abs(liquids[0] + liquids[1] + liquids[2]);

for (let i = 0; i < n - 2; i++) {
  let left = i + 1;
  let right = n - 1;
  while (left < right) {
    const sum = liquids[i] + liquids[left] + liquids[right];

    if (Math.abs(sum) < minSum) {
      minSum = Math.abs(sum);
      answer = [liquids[i], liquids[left], liquids[right]];
    }

    if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(answer.join(' '));
