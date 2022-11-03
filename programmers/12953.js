/**
 * N개의 최소공배수
 * https://school.programmers.co.kr/learn/courses/30/lessons/12953
 */

function solution(arr) {
    if (arr.length === 1) return arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i + 1] = calLCD(arr[i], arr[i + 1]);
    }
    return arr[arr.length - 1];
}

const calLCD = (num1, num2) => {
    let answer = num1 * num2;
    let divider = 2;
    let gcd = 1;
    while (Math.min(num1, num2) >= divider) {
        if (num1 % divider === 0 && num2 % divider === 0) {
            gcd *= divider;
            num1 /= divider;
            num2 /= divider;
        } else {
            divider++;
        }
    }
    return answer / gcd;
};
