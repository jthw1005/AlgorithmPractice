function maxSubArraySum(array, num) {
  if (array.length < num) return null;

  let max = -Infinity;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    tempSum = tempSum + array[i];
  }
  for (let j = 0; j <= array.length - num; j++) {
    if (max < tempSum) max = tempSum;
    tempSum = tempSum - array[j] + array[j + num];
  }

  return max;
}
