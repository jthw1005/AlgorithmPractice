/**
 * 폰켓몬
 * https://school.programmers.co.kr/learn/courses/30/lessons/1845
 */

function solution(nums) {
  const limit = nums.length / 2;
  const numsSet = new Set(nums);
  return numsSet.size > limit ? limit : numsSet.size;
}
