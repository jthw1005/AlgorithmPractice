const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim();

const [a, b, c] = input.split(' ').map(BigInt);

const newPower = (a, b, c) => {
  if (b === 1n) {
    return a % c;
  }

  const half = newPower(a, BigInt(parseInt(b / 2n)), c);

  if (b % 2n) {
    return (((half * half) % c) * a) % c;
  } else {
    return (half * half) % c;
  }
};

const answer = newPower(a, b, c);
console.log(String(answer));
