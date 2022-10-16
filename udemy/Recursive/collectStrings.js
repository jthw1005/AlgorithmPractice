const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

function collectStrings(obj) {
  const result = [];

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'string') result.push(obj[key]);
    else if (typeof obj[key] === 'object' && !Array.isArray(obj))
      result.push(...collectStrings(obj[key]));
  });

  return result;
}
// collectStrings(obj); // ["foo", "bar", "baz"])
