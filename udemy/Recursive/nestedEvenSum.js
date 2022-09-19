function nestedEvenSum(obj) {
  let evenSum = 0;
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object') evenSum += nestedEvenSum(obj[key]);
    else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) evenSum += obj[key];
  });
  return evenSum;
}

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

console.log(nestedEvenSum(obj2));
