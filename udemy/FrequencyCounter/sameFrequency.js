/*
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:
Time: O(N)

Sample Input:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

function sameFrequency(a, b) {
  const obj = {};

  while (a > 0) {
    const temp = a % 10;
    obj[temp] = obj[temp] ? obj[temp] + 1 : 1;
    a = Math.floor(a / 10);
  }

  while (b > 0) {
    const temp = b % 10;
    if (!obj[temp]) return false;
    obj[temp]--;
    b = Math.floor(b / 10);
  }

  return true;
}
