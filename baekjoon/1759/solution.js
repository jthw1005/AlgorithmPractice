const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');
const [l, c] = input[0].split(' ').map(Number);
const alphabets = input[1].split(' ').sort();
const resultArr = [];

const calConsonantNum = (word) => {
  let cnt = 0;
  const consonant = 'aeiou';
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < consonant.length; j++) {
      if (word[i] !== consonant[j]) continue;
      cnt++;
    }
  }
  return cnt;
};

const solution = (currIdx, currPW) => {
  // 문자의 길이가 4가 되면 종료
  if (currPW.length === l) {
    const numOfConSonant = calConsonantNum(currPW);
    if (numOfConSonant <= 0 || numOfConSonant >= l - 1) return;
    return resultArr.push(currPW);
  }
  //  (골라야 하는 문자 개수 > 남은 후보 문자 개수) 이면, 만들 수 없으므로 종료
  if (l - currPW.length > c - currIdx) return;

  // 현재 인덱스의 문자를 고르는 경우
  solution(currIdx + 1, currPW + alphabets[currIdx]);
  // 현재 인덱스의 문자를 고르지 않고 넘기는 경우
  solution(currIdx + 1, currPW);
};

solution(0, '');

console.log(resultArr.join('\n'));
