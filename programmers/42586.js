/**
 * 기능 개발
 * https://school.programmers.co.kr/learn/courses/30/lessons/42586
 */

function solution(progresses, speeds) {
  const deployDaysArr = progresses.map((el, idx) => Math.ceil((100 - el) / speeds[idx]));
  const answer = [];
  let cnt = 0;
  let currMaxVal = deployDaysArr[0];

  deployDaysArr.forEach((el) => {
    if (currMaxVal >= el) {
      cnt++;
    } else {
      answer.push(cnt);
      currMaxVal = el;
      cnt = 1;
    }
  });
  answer.push(cnt);
  return answer;
}
