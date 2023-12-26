const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [word, N, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const input = arr.map((v) => v.split(' '));
const alphabetArr = Array.from({ length: word.length + 1 }, () =>
  new Array(26).fill(0)
);

for (let i = 0; i < word.length; i++) {
  for (let j = 0; j < 26; j++) {
    alphabetArr[i + 1][j] = alphabetArr[i][j];
  }
  alphabetArr[i + 1][word[i].charCodeAt() - 97]++;
}

const answer = [];
input.forEach((el) => {
  const [char, start, end] = el;
  answer.push(
    alphabetArr[+end + 1][char.charCodeAt() - 97] -
      alphabetArr[+start][char.charCodeAt() - 97]
  );
});

console.log(answer.join('\n'));
