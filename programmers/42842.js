/**
 * 카펫
 * https://school.programmers.co.kr/learn/courses/30/lessons/42842
 */

function solution(b, y) {
    let h = 3;
    while (true) {
        // if (h > Math.sqrt(b + y)) return null;
        if ((h - 2) * (b / 2 - h) === y) {
            return [b / 2 - h + 2, h];
        }
        h++;
    }
}
