/**
 * 예상 대진표
 * https://school.programmers.co.kr/learn/courses/30/lessons/12985
 */

function solution(n, a, b) {
    let answer = 1;
    let left = Math.min(a, b);
    let right = Math.max(a, b);

    while (true) {
        if (left % 2 === 1 && right % 2 === 0 && right - left === 1) break;
        left = Math.ceil(left / 2);
        right = Math.ceil(right / 2);
        answer++;
    }

    return answer;
}
