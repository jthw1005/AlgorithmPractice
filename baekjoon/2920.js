const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (input) {
  const arr = input.split(' ');

  let dx = -1;
  let anwser = 'descending';
  if (Number(arr[0]) === 1) {
    dx = 1;
    anwser = 'ascending';
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (Number(arr[i + 1]) !== Number(arr[i]) + dx) {
      console.log('mixed');
      rl.close();
      return false;
    }
  }

  console.log(`${anwser}`);
  rl.close();
});

rl.on('close', function () {
  process.exit();
});
