/*
Multiple Pointers - areThereDuplicates
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

function areThereDuplicates(...args) {
  const arr = args.sort();

  for (let left = 0; left < arr.length - 1; left++) {
    if (arr[left] === arr[left + 1]) return true;
  }

  return false;
}
