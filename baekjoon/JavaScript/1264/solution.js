const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const answer = [];

for (let i = 0; i < input.length; i++) {
    if (i === input.length - 1) continue;
    let cnt = 0;
    for (let j = 0; j < input[i].length; j++) {
        if (
            input[i][j].toLowerCase() === 'a' ||
            input[i][j].toLowerCase() === 'e' ||
            input[i][j].toLowerCase() === 'i' ||
            input[i][j].toLowerCase() === 'o' ||
            input[i][j].toLowerCase() === 'u'
        ) {
            cnt++;
        }
    }
    answer.push(cnt);
}

console.log(answer.join('\n'));
