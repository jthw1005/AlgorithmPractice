/**
 * 입국심사
 * https://school.programmers.co.kr/learn/courses/30/lessons/43238
 */

function solution(n, times) {
    const minTime = Math.min(...times);
    let right = n * minTime;
    let left = 0;
    let result = null;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const total = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);
        if (total < n) {
            left = mid + 1;
        } else if (total > n) {
            right = mid - 1;
            result = mid;
        } else {
            result = mid;
            break;
        }
    }

    return result - Math.min(...times.map((time) => result % time));
}
