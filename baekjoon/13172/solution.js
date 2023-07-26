const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');
const MOD = 1000000007n;
const M = +input[0];
const N = [];
const S = [];

for (let i = 1; i <= M; i++) {
    const [ni, si] = input[i].split(' ').map(x => BigInt(x));
    N.push(ni);
    S.push(si);
}

const pow = (base, exp, mod) => {
    let result = 1n;
    base = BigInt(base) % mod;

    while (exp > 0) {
        if (exp % 2n === 1n) {
            result = (result * base) % mod;
        }
        base = (base * base) % mod;
        exp /= 2n;
    }

    return result;
};

const solve = (N, S) => {
    let totalExpectation = 0n;

    for (let i = 0; i < N.length; i++) {
        let modInverse = pow(N[i], MOD - 2n, MOD);
        totalExpectation = (totalExpectation + ((S[i] * modInverse) % MOD)) % MOD;
    }

    return totalExpectation;
};

const main = (N, S) => {
    return solve(N, S) + '';
};

console.log(main(N, S));
