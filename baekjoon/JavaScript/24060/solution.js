const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [_, num] = a.split(' ');
const arr = b.split(' ').map((el) => +el);
let count = 0;

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  const result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
      count++;
    } else {
      result.push(arr2[j]);
      j++;
      count++;
    }
    if (count === +num) console.log(result[result.length - 1]);
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
    count++;
    if (count === +num) console.log(result[result.length - 1]);
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
    count++;
    if (count === +num) console.log(result[result.length - 1]);
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const mid = Math.ceil(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort(arr);
if (count < num) console.log(-1);
