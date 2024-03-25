const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();

function hanoi(n = 1, str = '1 3') {
  if (n === input) return str;
  const oneToTwo = str.replaceAll(3, 0).replaceAll(2, 3).replaceAll(0, 2);
  const twoToThree = str.replaceAll(1, 0).replaceAll(2, 1).replaceAll(0, 2);
  return hanoi(n + 1, oneToTwo + '\n1 3\n' + twoToThree);
}

const answer = hanoi();
console.log(answer.split('\n').length + '\n' + answer);
