const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n').map(Number);

function printPostOrder(arr) {
    const result = [];

    const stack = [[0, arr.length - 1]];

    while (stack.length) {
        const [start, end] = stack.pop();
        if (start > end) continue;
        const root = arr[start];
        let mid;
        for (mid = start + 1; mid <= end; mid++) {
            if (arr[mid] > root) break;
        }
        stack.push([start + 1, mid - 1]);
        stack.push([mid, end]);
        result.unshift(root);
    }

    return result;
}

console.log(printPostOrder(input).join('\n'));
