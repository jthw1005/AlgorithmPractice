function someRecursive(array, func) {
  const newArray = [...array];
  const len = newArray.length;

  if (len === 0) return false;
  if (func(newArray.pop())) return true;

  return someRecursive(newArray, func);
}
