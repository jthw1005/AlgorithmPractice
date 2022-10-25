/**
 * 구명보트
 * https://school.programmers.co.kr/learn/courses/30/lessons/42885
 */

function solution(people, limit) {
    people.sort((right, left) => right - left);
    let cnt = 0;

    while (people.length) {
        const tempEl = people.pop();
        let pairIdx = null;

        for (let i = 0; i < people.length; i++) {
            if (people[i] <= limit - tempEl) {
                pairIdx = i;
            } else {
                break;
            }
        }

        if (pairIdx !== null) {
            people.splice(pairIdx, 1);
        }
        cnt++;
    }

    return cnt;
}
