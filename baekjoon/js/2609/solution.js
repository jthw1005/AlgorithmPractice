const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const calGCDLCM = (n, m) => {
  const calGcd = (a, b) => (a % b ? calGcd(b, a % b) : b);
  const calLcm = (a, b) => (a * b) / calGcd(a, b);
  return [calGcd(n, m), calLcm(n, m)];
};

console.log(calGCDLCM(...input).join('\n'));
