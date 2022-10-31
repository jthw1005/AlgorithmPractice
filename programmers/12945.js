/**
 * 피보나치 수
 * https://school.programmers.co.kr/learn/courses/30/lessons/12945
 */

function solution(n) {
    const fibArr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        const num = (fibArr[i - 1] + fibArr[i - 2]) % 1234567;
        fibArr.push(num);
    }
    return fibArr[n];
}
