const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();
const [num, ...arr] = input.split('\n').map((el) => +el);

const obj = {};
arr.sort((a, b) => a - b);
arr.forEach((el) => {
  obj[el] = obj[el] || 0;
  obj[el]++;
});
const maxFreq = Math.max(...Object.keys(obj).map((el) => obj[el]));
const maxFreqVals = [];
for (let key in obj) {
  if (obj[key] === maxFreq) maxFreqVals.push(key);
}

const avg = Math.round(arr.reduce((acc, cur) => acc + cur, 0) / num);
const mid = arr[Math.floor(arr.length / 2)];
const maxFreqVal = maxFreqVals.length > 1 ? maxFreqVals.sort((a, b) => a - b)[1] : maxFreqVals[0];
const range = Math.abs(Math.max(...arr) - Math.min(...arr));
const answer = `${avg === -0 ? 0 : avg}\n${mid}\n${maxFreqVal}\n${range}`;

console.log(answer);
