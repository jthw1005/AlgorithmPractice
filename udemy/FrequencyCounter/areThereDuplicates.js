/*
Frequency Counter - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 

Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)
 */

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
