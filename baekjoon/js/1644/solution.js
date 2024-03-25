const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const n = +require('fs').readFileSync(filePath).toString().trim();

const getPrimeUnderN = (n) => {
  let arr = Array(n + 1);
  let primes = [];

  for (let i = 2; i <= n; i++) {
    if (arr[i]) {
      continue;
    }
    primes.push(i);
    for (let j = i * i; j <= n; j += i) {
      arr[j] = true;
    }
  }
  return primes;
};

const solution = (n) => {
  const primeArr = getPrimeUnderN(n);
  let cnt = 0;
  let left = 0;
  let right = 0;
  let sum = primeArr[left];

  while ((left <= right) & (right < primeArr.length)) {
    if (sum > n) {
      sum -= primeArr[left++];
    } else if (sum < n) {
      sum += primeArr[++right];
    } else {
      cnt++;
      sum += primeArr[++right];
    }
  }

  return cnt;
};

console.log(solution(n));
