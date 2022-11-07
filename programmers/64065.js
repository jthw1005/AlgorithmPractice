/**
 * 튜플
 * https://school.programmers.co.kr/learn/courses/30/lessons/64065
 */

function solution(s) {
  return JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))
    .sort((next, prev) => next.length - prev.length)
    .reduce((acc, cur) => [...acc, sum(cur) - sum(acc)], []);
}

const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);
