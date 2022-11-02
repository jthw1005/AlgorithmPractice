/**
 * 영어 끝말잇기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12981
 */

function solution(n, words) {
    let idx = null;
    const hash = {};
    for (let i = 0; i < words.length; i++) {
        // 단어가 한 글자인 경우
        if (words[i].length === 1) {
            idx = i;
            break;
        }
        // 중복된 단어인 경우
        if (hash[words[i]]) {
            idx = i;
            break;
        } else {
            hash[words[i]] = 1;
        }
        // 단어가 이어지지 않는 경우
        if (words[i + 1] && words[i][words[i].length - 1] !== words[i + 1][0]) {
            idx = i + 1;
            break;
        }
    }

    return idx ? [(idx % n) + 1, Math.floor(idx / n) + 1] : [0, 0];
}
