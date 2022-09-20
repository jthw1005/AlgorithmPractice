function capitalizeWords(array) {
  const result = [];
  if (array.length === 0) return result;
  result.push(array[0].toUpperCase());
  return result.concat(capitalizeWords(array.slice(1, array.length)));
}
