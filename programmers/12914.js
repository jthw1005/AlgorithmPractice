/**
 * 멀리뛰기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12914
 */

function solution(n) {
    const dpArr = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        dpArr.push((dpArr[i - 1] + dpArr[i - 2]) % 1234567);
    }
    return dpArr[n];
}
