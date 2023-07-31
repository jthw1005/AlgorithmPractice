const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const N = +input[0];
const numbers = input[1].split(' ').map(Number);

const scores = new Array(1_000_001).fill(0);
const cards = new Array(1_000_001).fill(0);

const solution = (N, numbers) => {
    for (let i = 0; i < N; i++) {
        cards[numbers[i]] = 1;
    }

    for (let i = 0; i < N; i++) {
        for (let j = numbers[i] * 2; j < 1_000_001; j += numbers[i]) {
            if (cards[j]) {
                scores[numbers[i]]++;
                scores[j]--;
            }
        }
    }

    let output = '';
    for (let i = 0; i < N; i++) {
        output += scores[numbers[i]] + ' ';
    }
    console.log(output.trim());
};

solution(N, numbers);
