function areThereDuplicates(...args) {
  const arr = [...args].sort();

  for (let left = 0; left < arr.length - 1; left++) {
    if (arr[left] === arr[left + 1]) return true;
  }

  return false;
}
