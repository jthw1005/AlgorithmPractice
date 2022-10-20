/**
 * 프린터
 * https://school.programmers.co.kr/learn/courses/30/lessons/42587
 */

function solution(priorities, location) {
    let count = 0;
    const arr = priorities.map((priority, idx) => [idx, priority]);

    while (arr.length) {
        const oldest = arr.shift();
        if (arr.some((Request) => Request[1] > oldest[1])) {
            arr.push(oldest);
        } else {
            count++;
            if (oldest[0] === location) return count;
        }
    }
}
