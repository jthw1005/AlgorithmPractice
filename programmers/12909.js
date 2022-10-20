/**
 * 올바른 괄호
 * https://school.programmers.co.kr/learn/courses/30/lessons/12909
 */

function solution(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (result < 0) return false;
        if (str[i] === '(') result++;
        else result--;
    }
    return result === 0;
}
