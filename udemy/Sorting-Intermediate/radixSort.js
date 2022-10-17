function radixSort(nums) {
  const maxDigitCount = mostDigits(nums);
  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < nums.length; j++) {
      let digit = getDigit(nums[j], i);
      digitBuckets[digit].push(nums[j]);
    }

    nums = [].concat(...digitBuckets);
  }
  return nums;
}

const getDigit = (number, digit) => {
  return Math.floor(number / 10 ** digit) % 10;
};

const digitCount = (num) => {
  return (num + '').length;
};

const mostDigits = (nums) => {
  const digits = nums.map((num) => digitCount(num));
  return Math.max(...digits);
};

console.log(radixSort([1, 10, 5, 7, 228, 3123, 411, 62, 123, 4567]));
