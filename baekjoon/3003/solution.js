const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const curPieces = input.split(' ');
const answer = [1, 1, 2, 2, 2, 8].map((piece, idx) => piece - Number(curPieces[idx]));

console.log(...answer);
