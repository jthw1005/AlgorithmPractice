/**
 * 최고의 집합
 * https://school.programmers.co.kr/learn/courses/30/lessons/12938
 */

function solution(n, s) {
    const share = Math.floor(s / n);
    const remainder = s % n;

    if (share === 0) return [-1];

    const arr1 = Array.from({ length: n - remainder }, () => share);
    const arr2 = Array.from({ length: remainder }, () => share + 1);

    return arr1.concat(arr2);
}
