function fib_recursive(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

// 이 경우에 O(2^N)의 시간 복잡도를 갖는다.

function fib_memo(n, memo = []) {
    if (memo[n]) return memo[n];
    if (n <= 2) return 1;
    const result = fib_memo(n - 1, memo) + fib_memo(n - 2, memo);
    memo[n] = result;
    return result;
}
// 이 경우에는 O(N)의 시간 복잡도를 갖는다.
// 재귀를 사용하기 때문에 호출 스택의 크기에 한계가 있어서 입력값에 제한이 있다.

function fib_table(n) {
    const table = [];
    for (let i = 1; i <= n; i++) {
        if (i <= 2) table[i] = 1;
        else table[i] = table[i - 1] + table[i - 2];
    }
    return table[n];
}

// 이 경우에도 O(N)의 시간 복잡도를 갖는다.
// 재귀를 사용하지 않으므로 공간이 많이 필요하지 않다.
