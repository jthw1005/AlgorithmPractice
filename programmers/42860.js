/**
 * 조이스틱
 * https://school.programmers.co.kr/learn/courses/30/lessons/42860
 */

function solution(name) {
    let totalCnt = 0;
    let minMove = Infinity;

    for (let i = 0; i < name.length; i++) {
        // MODIFY ALPHABET
        const alphabetIdx = name.charCodeAt(i) - 65;
        const increment = alphabetIdx >= 13 ? 26 - alphabetIdx : alphabetIdx;
        totalCnt = totalCnt + increment;

        // MODIFY CURSOR
        let nextCursor = i + 1;
        while (name[nextCursor] === 'A' && nextCursor < name.length) {
            nextCursor++;
        }
        minMove = Math.min(minMove, i * 2 + name.length - nextCursor);
        minMove = Math.min(minMove, i + 2 * (name.length - nextCursor));
    }

    totalCnt = totalCnt + minMove;

    return totalCnt;
}
