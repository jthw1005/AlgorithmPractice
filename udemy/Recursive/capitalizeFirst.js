function capitalizeFirst(array) {
  if (array.length === 0) return [];
  const result = [array[0][0].toUpperCase() + array[0].slice(1, array[0].length)];
  return result.concat(capitalizeFirst(array.slice(1, array.length)));
}
