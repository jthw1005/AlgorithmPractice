const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...arr] = require('fs').readFileSync(filePath).toString().trim().split('\n');
const chemi = arr.map((v) => v.split(' ').map(Number));

function solution(n, chemi) {
  const teamA = [1];
  const scoreGap = [];

  const innerFunc = (level) => {
    if (level === n / 2) {
      const teamB = Array.from({ length: n }, (_, i) => i + 1).filter(
        (num) => !teamA.includes(num)
      );
      let scoreA = 0;
      let scoreB = 0;
      for (let i = 0; i < n / 2 - 1; i++) {
        for (let j = i + 1; j < n / 2; j++) {
          scoreA += chemi[teamA[i] - 1][teamA[j] - 1] + chemi[teamA[j] - 1][teamA[i] - 1];
          scoreB += chemi[teamB[i] - 1][teamB[j] - 1] + chemi[teamB[j] - 1][teamB[i] - 1];
        }
      }
      scoreGap.push(Math.abs(scoreA - scoreB));
    }

    const limit = teamA[teamA.length - 1];

    for (let i = 2; i <= n; i++) {
      if (i > limit) {
        teamA.push(i);
        innerFunc(level + 1);
        teamA.pop();
      }
    }
  };

  innerFunc(1);

  const answer = Math.min(...scoreGap);
  return answer;
}

console.log(solution(n, chemi));
