const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(fp).toString().trim();

const answer = [];

for (let i = input; i > 0; i--) {
  answer.push('*'.repeat(i));
}

console.log(answer.join('\n'));
