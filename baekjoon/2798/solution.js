const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [num, cards] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const m = num[1];
const numOfCards = cards.length;
let closestNum = 0;
let sum = 0;

for (let i = 0; i < numOfCards - 2; i++) {
  for (let j = i + 1; j < numOfCards - 1; j++) {
    for (let k = j + 1; k < numOfCards; k++) {
      sum = cards[i] + cards[j] + cards[k];
      if (sum === m) {
        return console.log(sum);
      } else if (sum > closestNum && sum < m) {
        closestNum = sum;
      }
    }
  }
}

console.log(closestNum);
