const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = BigInt(require('fs').readFileSync(fp).toString().trim());

const MOD = 1000000007n;

function matrixMultiply(A, B) {
    const result = [
        [(A[0][0] * B[0][0] + A[0][1] * B[1][0]) % MOD, (A[0][0] * B[0][1] + A[0][1] * B[1][1]) % MOD],
        [(A[1][0] * B[0][0] + A[1][1] * B[1][0]) % MOD, (A[1][0] * B[0][1] + A[1][1] * B[1][1]) % MOD],
    ];
    return result;
}

function matrixPower(M, n) {
    if (n === 1n) return M;
    if (n % 2n) return matrixMultiply(M, matrixPower(M, n - 1n));
    const halfPower = matrixPower(M, n / 2n);
    return matrixMultiply(halfPower, halfPower);
}

function fibonacci(n) {
    if (n <= 1) return n;
    const base = [
        [1n, 1n],
        [1n, 0n],
    ];
    const resultMatrix = matrixPower(base, n - 1n);
    return resultMatrix[0][0];
}

console.log(String(fibonacci(input)));
