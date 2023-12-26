const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [num, ...arr] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const recursion = (str, i, j, cnt) => {
  if (i >= j) {
    return [1, cnt];
  } else if (str[i] !== str[j]) {
    return [0, cnt];
  } else {
    return recursion(str, i + 1, j - 1, cnt + 1);
  }
};

const isPalindrome = (str) => {
  return recursion(str, 0, str.length - 1, 1);
};

console.log(arr.map((el) => isPalindrome(el).join(' ')).join('\n'));
