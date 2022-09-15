function reverse(string) {
  const len = string.length;
  if (len === 0) return '';
  return string[len - 1] + reverse(string.substring(0, len - 1));
}
