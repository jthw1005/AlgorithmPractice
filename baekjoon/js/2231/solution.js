const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();

const solution = (n) => {
  const str = n + '';
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += +str[i];
  }
  return sum + n;
};

for (let i = 1; i < input; i++) {
  const result = solution(i);
  if (result === input) {
    return console.log(i);
  }
}

return console.log(0);
