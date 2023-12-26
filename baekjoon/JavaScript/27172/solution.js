const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const N = +input[0];
const numbers = input[1].split(' ').map(Number);

const solution = (N, numbers) => {
    const max = Math.max(...numbers);

    const scores = new Array(max).fill(0);
    const cards = new Array(max).fill(0);

    for (let i = 0; i < N; i++) {
        cards[numbers[i] - 1] = 1;
    }

    for (let i = 0; i < N; i++) {
        for (let j = numbers[i] * 2; j <= max; j += numbers[i]) {
            if (cards[j - 1]) {
                scores[numbers[i] - 1]++;
                scores[j - 1]--;
            }
        }
    }

    let output = '';
    for (let i = 0; i < N; i++) {
        output += scores[numbers[i] - 1] + ' ';
    }
    console.log(output.trim());
};

solution(N, numbers);
