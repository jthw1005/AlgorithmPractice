function flatten(arr) {
  const result = [];

  arr.forEach((el) => {
    if (el.length) result.push(...flatten(el));
    else result.push(el);
  });

  return result;
}
