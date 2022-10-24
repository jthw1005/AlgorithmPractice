/**
 * 이진 변환 반복하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/70129
 */

function solution(s) {
    let numOfZero = 0;
    let cnt = 0;
    let str = s;
    while (str !== '1') {
        const removed = removeZero(str);
        numOfZero += str.length - removed.length;
        str = decToBin(removed.length);
        cnt++;
    }
    return [cnt, numOfZero];
}

function removeZero(s) {
    return s
        .split('')
        .filter((el) => el !== '0')
        .join('');
}

function decToBin(number) {
    const result = [];
    do {
        result.push(number % 2);
        number = Math.floor(number / 2);
    } while (number !== 0);
    return result.reverse().join('');
}
