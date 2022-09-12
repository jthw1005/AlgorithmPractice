function findLongestSubstring(string) {
  if (string.length === 0) return 0;

  let start = 0;
  let finish = start + 1;

  const resultArr = [];
  const testSet = new Set(string[0]);

  while (finish < string.length) {
    const prevSetLength = testSet.size;
    testSet.add(string[finish]);
    const currSetLength = testSet.size;

    if (prevSetLength === currSetLength) {
      resultArr.push(finish - start);
      start++;
      finish = start + 1;
      testSet.clear();
      testSet.add(string[start]);
    } else {
      finish++;
    }

    if (finish === string.length) resultArr.push(finish - start);
  }

  return Math.max(...resultArr);
}

console.log(findLongestSubstring('thisisawesome'));
