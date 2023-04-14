/**
 * 상호평가
 * https://programmers.co.kr/learn/courses/30/lessons/83201
 */

const input = [
  [100, 90, 98, 88, 65],
  [100, 45, 99, 85, 77],
  [47, 88, 95, 80, 67],
  [61, 57, 100, 80, 65],
  [24, 90, 94, 75, 65],
];

// 행렬의 열과 행을 바꾸는 함수
const transpose = (arr) => {
  const result = [];
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    const tempArr = [];
    for (let j = 0; j < len; j++) {
      tempArr.push(arr[j][i]);
    }
    result.push([...tempArr]);
    tempArr.length = 0;
  }

  return result;
};

// 유일한 최댓값의 인덱스를 찾는 함수
const getOnlyMaxIdx = (arr) => {
  const maxVal = Math.max(...arr);
  const maxIdx = arr.indexOf(maxVal);
  for (let i = maxIdx + 1; i < arr.length; i++) {
    if (arr[i] === maxVal) return -1;
  }
  return maxIdx;
};

// 유일한 최솟값의 인덱스를 찾는 함수
const getOnlyMinIdx = (arr) => {
  const minVal = Math.min(...arr);
  const minIdx = arr.indexOf(minVal);
  for (let i = minIdx + 1; i < arr.length; i++) {
    if (arr[i] === minVal) return -1;
  }
  return minIdx;
};

// 점수 입력 받아 학점 반환하는 함수
const getGrade = (score) => {
  let grade;
  if (score >= 90) {
    grade = 'A';
  } else if (score >= 80) {
    grade = 'B';
  } else if (score >= 70) {
    grade = 'C';
  } else if (score >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }
  return grade;
};

const solution = (arr) => {
  const newInput = transpose(arr);
  const len = newInput.length;
  const results = [];

  for (let i = 0; i < len; i++) {
    const maxIdx = getOnlyMaxIdx(newInput[i]);
    const minIdx = getOnlyMinIdx(newInput[i]);
    let sum = newInput[i].reduce((cur, acc) => cur + acc, 0);
    if (maxIdx === i || minIdx === i) {
      sum -= newInput[i][i];
      results.push(sum / (len - 1));
    } else {
      results.push(sum / len);
    }
  }

  const answer = results.map((result) => getGrade(result));
  return answer;
};

console.log(solution(input));
