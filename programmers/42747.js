/**
 * H-Index
 * https://school.programmers.co.kr/learn/courses/30/lessons/42747
 */

function solution(citations) {
    const sortedArr = citations.sort((a, b) => b - a);
    let i;
    for (i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] < i + 1) return i;
    }
    return i;
}

function solution(citations) {
    const sortedArr = mergeSort(citations);
    let i;
    for (i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] < i + 1) return i;
    }
    return i;
}

function mergeSort(arr) {
    if (arr.length === 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(arr1, arr2) {
    const result = [];
    let i = 0,
        j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr2[j]);
            j++;
        } else {
            result.push(arr1[i]);
            i++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

/*
// merge sort
테스트 1 〉	통과 (0.78ms, 33.8MB)
테스트 2 〉	통과 (1.82ms, 36.9MB)
테스트 3 〉	통과 (1.16ms, 33.8MB)
테스트 4 〉	통과 (0.92ms, 33.9MB)
테스트 5 〉	통과 (1.77ms, 36.9MB)
테스트 6 〉	통과 (1.73ms, 36.9MB)
테스트 7 〉	통과 (0.67ms, 33.8MB)
테스트 8 〉	통과 (0.24ms, 33.5MB)
테스트 9 〉	통과 (0.33ms, 33.4MB)
테스트 10 〉	통과 (0.63ms, 33.6MB)
테스트 11 〉	통과 (1.97ms, 37.1MB)
테스트 12 〉	통과 (0.37ms, 33.5MB)
테스트 13 〉	통과 (1.71ms, 37MB)
테스트 14 〉	통과 (1.86ms, 36.9MB)
테스트 15 〉	통과 (1.83ms, 36.9MB)
테스트 16 〉	통과 (0.18ms, 33.5MB)

// 내장 sort 메서드
테스트 1 〉	통과 (0.26ms, 33.5MB)
테스트 2 〉	통과 (0.34ms, 33.5MB)
테스트 3 〉	통과 (0.31ms, 33.6MB)
테스트 4 〉	통과 (0.30ms, 33.5MB)
테스트 5 〉	통과 (0.34ms, 33.5MB)
테스트 6 〉	통과 (0.40ms, 33.6MB)
테스트 7 〉	통과 (0.21ms, 33.5MB)
테스트 8 〉	통과 (0.12ms, 33.5MB)
테스트 9 〉	통과 (0.15ms, 33.4MB)
테스트 10 〉	통과 (0.24ms, 33.6MB)
테스트 11 〉	통과 (0.39ms, 33.5MB)
테스트 12 〉	통과 (0.16ms, 33.5MB)
테스트 13 〉	통과 (0.36ms, 33.4MB)
테스트 14 〉	통과 (0.37ms, 33.6MB)
테스트 15 〉	통과 (0.36ms, 33.4MB)
테스트 16 〉	통과 (0.04ms, 33.5MB)
*/
