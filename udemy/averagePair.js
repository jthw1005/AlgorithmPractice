function averagePair(arr, average) {
  if (arr.length === 0) return false;

  let left = 0;
  let right = arr.length - 1;
  let currentAvg = 0;

  do {
    currentAvg = (arr[left] + arr[right]) / 2;
    if (currentAvg === average) return true;
    else if (currentAvg > average) right--;
    else if (currentAvg < average) left++;
  } while (left !== right);

  return false;
}

console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
