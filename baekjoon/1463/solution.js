/* bottomup with iterative */
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = +require('fs').readFileSync(filePath).toString().trim();

// const dpArr = [null, 0, 1, 1];

// for (let i = 4; i <= input; i++) {
//   const arr = [dpArr[i - 1]];
//   if (i % 3 === 0) {
//     arr.push(dpArr[i / 3]);
//   }
//   if (i % 2 === 0) {
//     arr.push(dpArr[i / 2]);
//   }
//   dpArr[i] = 1 + Math.min(...arr);
// }

// console.log(dpArr[input]);

/* topdown with iterative*/

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();

const mySet = new Set();
let queue = [input];
let cnt = 0;

while (queue.length) {
  const tempQueue = [];
  for (let el of queue) {
    if (el === 1) return console.log(cnt);
    if (el % 3 === 0 && !mySet.has(el / 3)) {
      tempQueue.push(el / 3);
      mySet.has[el / 3] = true;
    }
    if (el % 2 === 0 && !mySet.has(el / 2)) {
      tempQueue.push(el / 2);
      mySet.has[el / 2] = true;
    }
    if (!mySet.has(el - 1)) {
      tempQueue.push(el - 1);
      mySet.has[el - 1] = true;
    }
  }
  cnt++;
  queue = tempQueue;
}
