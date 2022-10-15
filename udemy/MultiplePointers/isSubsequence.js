/*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:
Time Complexity - O(N + M)
Space Complexity - O(1)
*/

function isSubsequence(str1, str2) {
  let leftPointer = 0;
  let rightPointer = 0;

  while (rightPointer < str2.length || leftPointer < str1.length) {
    if (str1[leftPointer] === str2[rightPointer]) leftPointer++;
    rightPointer++;
  }

  if (leftPointer === str1.length) return true;
  return false;
}

function isSubsequence_recursive(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str1[0] === str2[0]) return isSubsequence_recursive(str1.substring(1), str2.substring(1));
  return isSubsequence_recursive(str1, str2.substring(1));
}
