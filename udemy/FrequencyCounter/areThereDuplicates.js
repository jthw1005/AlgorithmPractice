function areThereDuplicates() {
  const obj = {};
  const arr = [...arguments];
  let answer = false;

  arr.forEach((el) => {
    if (obj[el]) answer = true;
    obj[el] = 1;
  });

  return answer;
}

// One line solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
