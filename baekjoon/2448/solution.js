const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const n = +require('fs').readFileSync(fp).toString().trim();

const base = ['  *  ', ' * * ', '*****'];

const solution = n => {
    if (n === 0) return base;
    const prev = solution(n - 1);
    const size = 3 * 2 ** n;
    const curLen = getLen(n);
    const prevLen = getLen(n - 1);
    const answer = new Array(size).fill(null);

    for (let i = 0; i < size / 2; i++) {
        answer[i] = ' '.repeat((curLen - prevLen) / 2) + prev[i] + ' '.repeat((curLen - prevLen) / 2);
        answer[size / 2 + i] = prev[i] + ' ' + prev[i];
    }

    return answer;
};

const getLen = n => 6 * 2 ** n - 1;

const cal = input => {
    let tmp = input / 3;
    let cnt = 0;
    while (tmp % 2 === 0) {
        tmp = tmp / 2;
        cnt++;
    }
    return cnt;
};

console.table(solution(cal(n)).join('\n'));
