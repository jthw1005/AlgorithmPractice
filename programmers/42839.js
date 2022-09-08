/**
 * 소수 찾기
 * https://school.programmers.co.kr/learn/courses/30/lessons/42839
 */

function solution(numbers) {
  let numOfPrime = 0;
  const finalResultArr = new Set();
  const numbersArr = numbers.split('');
  for (let i = 1; i <= numbersArr.length; i++) {
    permutation(numbersArr, i).forEach((el) => {
      finalResultArr.add(+el.join(''));
    });
  }

  finalResultArr.forEach((el) => {
    if (isPrime(el)) {
      numOfPrime++;
    }
  });
  return numOfPrime;
}

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const permutation = (array, num) => {
  if (num === 1) return array.map((el) => [el]);
  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    const temp = array[i];
    const tempArr = array.filter((el, idx) => idx !== i);
    const result = permutation(tempArr, num - 1);
    result.forEach((el, idx) => {
      result[idx].unshift(temp);
      resultArray.push(el);
    });
  }
  return resultArray;
};
