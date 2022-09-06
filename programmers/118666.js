/**
 * 성격 유형 검사하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/118666
 */

// 첫 번째 풀이
function solution(survey, choices) {
  const MIDDLE_RESPONSE = 4;
  const mapForType = {
    R: 0,
    T: 0,
    C: 1,
    F: 1,
    J: 2,
    M: 2,
    A: 3,
    N: 3,
  };

  const totalResult = [
    { R: 0, T: 0 },
    { C: 0, F: 0 },
    { J: 0, M: 0 },
    { A: 0, N: 0 },
  ];

  const judgeSingleResponse = (questionType, userResponse) => {
    const point = userResponse - MIDDLE_RESPONSE;
    const selectedType = point > 0 ? questionType[1] : questionType[0];
    const singleResult = [selectedType, Math.abs(point)];
    return singleResult;
  };

  const updateResult = (singleResult) => {
    const [type, increase] = singleResult;
    totalResult[mapForType[type]][type] += increase;
  };

  survey.forEach((questionType, idx) => {
    const singleResult = judgeSingleResponse(questionType, choices[idx]);
    updateResult(singleResult);
  });

  const answer = totalResult
    .map((el) => {
      const types = Object.keys(el);
      let selectedType = types[0];
      if (el[types[0]] < el[types[1]]) selectedType = types[1];
      return selectedType;
    })
    .join('');

  return answer;
}

// 두 번째 풀이
function solution(survey, choices) {
  const resultObj = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  choices.forEach((choice, idx) => {
    const type = choice > 4 ? survey[idx][1] : survey[idx][0];
    resultObj[type] += Math.abs(choice - 4);
  });

  return `${resultObj.R >= resultObj.T ? 'R' : 'T'}${resultObj.C >= resultObj.F ? 'C' : 'F'}${
    resultObj.J >= resultObj.M ? 'J' : 'M'
  }${resultObj.A >= resultObj.N ? 'A' : 'N'}`;
}

// 세 번째 풀이
function solution(survey, choices) {
  const kind = ['RT', 'CF', 'JM', 'AN'];
  const resultObj = {};

  kind.forEach((types) => {
    types.split('').forEach((type) => {
      resultObj[type] = 0;
    });
  });

  choices.forEach((choice, idx) => {
    const type = choice < 4 ? survey[idx][0] : survey[idx][1];
    resultObj[type] += Math.abs(choice - 4);
  });

  return kind.map(([head, tail]) => (resultObj[head] >= resultObj[tail] ? head : tail)).join('');
}
