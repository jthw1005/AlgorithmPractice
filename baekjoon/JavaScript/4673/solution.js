const hash = {};
const LIMIT = 10_000;

const sumDigit = (n) => {
  let answer = 0;
  while (n !== 0) {
    answer = answer + (n % 10);
    n = Math.floor(n / 10);
  }
  return answer;
};

for (let i = 1; i <= LIMIT; i++) {
  const val = i + sumDigit(i);
  if (val <= LIMIT) {
    hash[val] = true;
  }
}

for (let i = 1; i <= LIMIT; i++) {
  if (!hash[i]) console.log(i);
}
