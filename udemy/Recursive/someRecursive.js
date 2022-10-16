function someRecursive(array, func) {
  const newArray = [...array];
  const len = newArray.length;

  if (len === 0) return false;
  if (func(newArray.pop())) return true;

  return someRecursive(newArray, func);
}
// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
