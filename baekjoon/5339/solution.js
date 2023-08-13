const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim();

console.log(
    '     /~\\\n    ( oo|\n    _\\=/_\n   /  _  \\\n  //|/.\\|\\\\\n ||  \\ /  ||\n============\n|          |\n|          |\n|          |'
);
