/**
 * 소수 만들기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12977
 */

function solution(nums) {
  let answer = 0;
  let testNum = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = 1; j < nums.length - 1; j++) {
      for (let k = 2; k < nums.length; k++) {
        testNum = nums[i] + nums[j] + nums[k];
        let count = 0;
        for (let p = 1; p <= testNum; p++) {
          if (testNum % p === 0) count++;
        }
        if (count === 2) answer++;
      }
    }
  }
  return answer;
}
