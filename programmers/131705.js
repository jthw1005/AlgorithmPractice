/**
 * 삼총사
 * https://school.programmers.co.kr/learn/courses/30/lessons/131705
 */

function solution(number) {
    let cnt = 0;
    for (let i = 0; i < number.length; i++) {
        const lastEl = number.pop();
        cnt += compare(number, -1 * lastEl);
    }
    return cnt;
}

function compare(arr, num) {
    let cnt = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === num) cnt++;
        }
    }
    return cnt;
}
