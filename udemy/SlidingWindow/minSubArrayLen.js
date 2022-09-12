function minSubArrayLen(arr, num) {
  if (arr.reduce((prev, curr) => prev + curr, 0) < num) return 0;

  let start = 0;
  let finish = start;
  let tempSum = 0;
  const resultArr = [];

  while (finish < arr.length) {
    tempSum += arr[finish];
    if (tempSum >= num) {
      resultArr.push(finish - start + 1);
      start++;
      finish = start;
      tempSum = 0;
    } else {
      finish++;
    }
  }

  return Math.min(...resultArr);
}
