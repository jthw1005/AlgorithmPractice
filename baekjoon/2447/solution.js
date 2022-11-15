const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();

const pattern = `***
* *
***`;

function drawRecursiveStar(pattern, n) {
  if (n === 3) return pattern;
  const patterns = pattern.split('\n');
  const sidePattern = [];
  const midPattern = [];
  patterns.forEach((el) => {
    sidePattern.push(el.repeat(3));
    midPattern.push(el + ' '.repeat(el.length) + el);
  });
  const answer = [sidePattern.join('\n'), midPattern.join('\n'), sidePattern.join('\n')].join('\n');
  return drawRecursiveStar(answer, n / 3);
}

console.log(drawRecursiveStar(pattern, input));
