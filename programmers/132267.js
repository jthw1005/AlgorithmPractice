/**
 * 콜라문제
 * https://school.programmers.co.kr/learn/courses/30/lessons/132267
 */

function solution(반납콜라개수, 교환콜라개수, 총빈병개수) {
    let 받은콜라개수 = 0;
    while (총빈병개수 >= 반납콜라개수) {
        const 최대치 = Math.floor(총빈병개수 / 반납콜라개수);
        총빈병개수 = 총빈병개수 + 최대치 * (교환콜라개수 - 반납콜라개수);
        받은콜라개수 = 받은콜라개수 + 최대치 * 교환콜라개수;
    }
    return 받은콜라개수;
}
