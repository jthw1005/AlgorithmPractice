const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(fp).toString().trim();

const dpArr = new Array(input + 1).fill(0);
dpArr[2] = 3;

for (let i = 3; i <= input; i++) {
  if (i % 2) {
    dpArr[i] = 0;
    continue;
  }

  let answer = 0;

  for (let j = 2; j < i; j += 2) {
    if (j === i - 2) {
      answer += dpArr[j] * 3;
    } else {
      answer += dpArr[j] * 2;
    }
  }

  dpArr[i] = answer + 2;
}

console.log(dpArr[input]);

/**
 * input = 8 일 때,
 * 연결되어 있는 8칸 -> 2
 * 6칸 + 연결되어 있는 2칸 -> a(6) * a(2) = a(6) * 3
 * 4칸 + 연결되어 있는 4칸 -> a(4) * 2
 * 2칸 + 연결되어 있는 6칸 -> a(2) * 2
 */
