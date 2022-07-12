/**
 * 모의고사
 * https://school.programmers.co.kr/learn/courses/30/lessons/42840
 */

function solution(answers) {
  const answer = [];
  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const man1c = answers.filter((a, i) => a === man1[i % man1.length]).length;
  const man2c = answers.filter((a, i) => a === man2[i % man2.length]).length;
  const man3c = answers.filter((a, i) => a === man3[i % man3.length]).length;

  const max = Math.max(man1c, man2c, man3c);
  if (max === man1c) answer.push(1);
  if (max === man2c) answer.push(2);
  if (max === man3c) answer.push(3);

  return answer;
}
