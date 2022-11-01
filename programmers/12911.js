/**
 * 다음 큰 숫자
 * https://school.programmers.co.kr/learn/courses/30/lessons/12911
 */

function solution(n) {
    const binArr = n.toString(2).split('');
    const numOfOne = countOne(binArr);
    let increment = 1;

    while (true) {
        const binArr_candidate = (n + increment).toString(2).split('');
        const numOfOne_candidate = countOne(binArr_candidate);
        if (numOfOne === numOfOne_candidate) break;
        increment++;
    }

    return n + increment;
}

const countOne = (arr) => {
    return arr.filter((el) => el === '1').length;
};
