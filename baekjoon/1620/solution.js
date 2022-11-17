const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [num, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [numOfDogam, _] = num.split(' ');
const dogam = input.slice(0, numOfDogam);
const quizs = input.slice(numOfDogam);

const obj = {};
let cnt = 1;
dogam.forEach((pocketmon) => {
  obj[pocketmon] = cnt;
  cnt++;
});

const answer = [];
quizs.forEach((quiz) => {
  if (+quiz + 0) {
    answer.push(dogam[+quiz - 1]);
  } else {
    answer.push(obj[quiz]);
  }
});

console.log(answer.join('\n'));
