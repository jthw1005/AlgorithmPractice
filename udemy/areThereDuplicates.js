// Using Frequency Counter
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

// Using Multiple Pointers
function areThereDuplicates(...args) {
  const arr = [...args].sort();

  for (let left = 0; left < arr.length - 1; left++) {
    if (arr[left] === arr[left + 1]) return true;
  }

  return false;
}

// One line solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
