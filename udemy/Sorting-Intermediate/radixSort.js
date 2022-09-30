function radixSort(arr) {
  const maxDigitCount = mostDigits(arr);
  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      digitBuckets[digit].push(arr[j]);
    }

    arr = [].concat(...digitBuckets);
  }
  return arr;
}

const getDigit = (number, digit) => {
  return Math.floor(number / 10 ** digit) % 10;
};

const digitCount = (number) => {
  return (number + '').length;
};

const mostDigits = (arr) => {
  const newArr = arr.map((el) => digitCount(el));
  return Math.max(...newArr);
};

console.log(radixSort([1, 10, 5, 7, 228, 3123, 411, 62, 123, 4567]));
