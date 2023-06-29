const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [str, exp] = require('fs').readFileSync(fp).toString().trim().split('\n');
const stack = [];

for (let i = 0; i < str.length; i++) {
  stack.push(str[i]);

  if (stack[stack.length - 1] === exp[exp.length - 1]) {
    let isSame = true;

    for (let j = 0; j < exp.length; j++) {
      if (stack[stack.length - 1 - j] !== exp[exp.length - 1 - j]) {
        isSame = false;
        break;
      }
    }

    if (isSame) {
      for (let j = 0; j < exp.length; j++) {
        stack.pop();
      }
    }
  }
}

console.log(stack.length ? stack.join('') : 'FRULA');
