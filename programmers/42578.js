/**
 * 위장
 * https://school.programmers.co.kr/learn/courses/30/lessons/42578
 */

function solution(clothes) {
    let result = 1;
    const hash = {};

    clothes.forEach((cloth, idx) => {
        hash[cloth[1]] = hash[cloth[1]] || 0;
        hash[cloth[1]]++;
    });

    for (let key in hash) {
        result = result * (hash[key] + 1);
    }

    return result - 1;
}
