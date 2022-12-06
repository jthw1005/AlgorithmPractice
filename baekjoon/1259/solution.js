const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);
input.pop();

const isPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};

const answer = [];

for (let i = 0; i < input.length; i++) {
  const result = isPalindrome(input[i] + '');
  answer.push(result ? 'yes' : 'no');
}

console.log(answer.join('\n'));
