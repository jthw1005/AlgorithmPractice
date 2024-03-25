const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

console.log(
    input
        .slice(0, input.length - 1)
        .map(v => {
            const [name, age, weight] = v.split(' ');

            if (+age > 17 || weight >= 80) {
                return `${name} Senior`;
            }

            return `${name} Junior`;
        }, [])
        .join('\n')
);
