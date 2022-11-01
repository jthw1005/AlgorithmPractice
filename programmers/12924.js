/**
 * 숫자의 표현
 * https://school.programmers.co.kr/learn/courses/30/lessons/12924
 */

function solution(n) {
    let divisors = [];
    const limit = Math.floor(Math.sqrt(n));

    for (let i = 1; i <= limit; i++) {
        if (n % i === 0) divisors.push(i);
    }

    divisors.forEach((divisor) => {
        const tempDivisor = n / divisor;
        if (divisor !== tempDivisor) divisors.push(tempDivisor);
    });

    return divisors.filter((divisor) => divisor % 2 === 1).length;
}
