/**
 * https://leetcode.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */

// O(NK)
const groupAnagrams = strs => {
  const hash = {};

  strs.forEach(str => {
    const key = getAlphabetCnt(str);
    hash[key] = hash[key] || [];
    hash[key].push(str);
  });

  return Object.values(hash);
};

const getAlphabetCnt = str => {
  const arr = Array.from({ length: 26 }, () => 0);
  const ASCII_a = 'a'.charCodeAt(0);

  for (let i = 0; i < str.length; i++) {
    arr[str.charCodeAt(i) - ASCII_a]++;
  }

  return arr.join('#');
};

// O(NKlogK)
// const groupAnagrams = (strs) => {
//     let hash = {};

//     strs.forEach((str) => {
//         let letters = str.split('').sort();
//         hash[letters] ? hash[letters].push(str) : (hash[letters] = [str]);
//     });

//     return Object.values(hash);
// };
