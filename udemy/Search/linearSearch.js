function linearSearch(arr, v) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === v) return i;
  }

  return -1;
}
