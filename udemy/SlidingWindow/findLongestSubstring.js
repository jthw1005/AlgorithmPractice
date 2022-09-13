// /*
// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// Examples:
// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

// Constraints:
// Time Complexity - O(n)
// */

// // My solution
// function findLongestSubstring(string) {
//   if (string.length === 0) return 0;

//   let start = 0;
//   let finish = start + 1;

//   const resultArr = [];
//   const testSet = new Set(string[0]);

//   while (finish < string.length) {
//     const prevSetLength = testSet.size;
//     testSet.add(string[finish]);
//     const currSetLength = testSet.size;

//     if (prevSetLength === currSetLength) {
//       resultArr.push(finish - start);
//       start++;
//       finish = start + 1;
//       testSet.clear();
//       testSet.add(string[start]);
//     } else {
//       finish++;
//     }

//     if (finish === string.length) resultArr.push(finish - start);
//   }

//   return Math.max(...resultArr);
// }

// // Colt Solution
// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// }

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
      //i = start;
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
}
