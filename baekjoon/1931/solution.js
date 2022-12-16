const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const n = input.shift();

const meetingTimes = input
  .map((v) => v.split(' ').map(Number))
  .sort((n, p) => n[1] - p[1] || n[0] - p[0]);

let answer = 1;
let currentMeeting = meetingTimes[0];

for (let i = 1; i < n; i++) {
  if (currentMeeting[1] <= meetingTimes[i][0]) {
    answer++;
    currentMeeting = meetingTimes[i];
  }
}

console.log(answer);
