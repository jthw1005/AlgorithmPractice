function flatten(arr) {
  const result = [];

  arr.forEach((el) => {
    if (el.length) result.push(...flatten(el));
    else result.push(el);
  });

  return result;
}
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
