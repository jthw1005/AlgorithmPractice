const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './1009.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const testCaseNum = +input[0];

for (let i = 1; i <= testCaseNum; i++) {
  const arr = input[i].split(' ').map((item) => +item);

  const result = [];
  const a = arr[0] % 10;
  const b = arr[1];
  let tmp = a;
  let cnt = 0;

  do {
    result.push(tmp);
    tmp *= a;
    tmp %= 10;
    cnt++;
  } while (tmp !== a);

  let d = b % cnt;
  if (d === 0) d = cnt;

  console.log(result[d - 1] === 0 ? 10 : result[d - 1]);
}
