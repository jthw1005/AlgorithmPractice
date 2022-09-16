function isPalindrome(string) {
  const len = string.length;
  if (len <= 1) return true;
  if (string[0] === string[len - 1]) return isPalindrome(string.slice(1, len - 1));
  else return false;
}
