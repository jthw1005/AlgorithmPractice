/**
 * 다트 게임
 * https://school.programmers.co.kr/learn/courses/30/lessons/17682
 */

function solution(dartResult) {
  const answerArray = [];
  let currentIndex = 0;
  let currentScore = 0;

  const dartResultArray = dartResult.split('');

  while (currentIndex < dartResult.length) {
    // 현재 인덱스의 숫자를 저장
    currentScore = +dartResult[currentIndex];

    // 그 다음 인덱스의 문자도 숫자인 경우
    if (!isNaN(dartResultArray[currentIndex + 1])) {
      currentScore = +(dartResult[currentIndex] + dartResult[currentIndex + 1]);
      currentIndex = currentIndex + 1;
    }

    currentIndex = currentIndex + 1;

    // S, D, T 처리
    switch (dartResult[currentIndex]) {
      case 'D':
        currentScore = currentScore ** 2;
        break;
      case 'T':
        currentScore = currentScore ** 3;
        break;
      default:
        currentScore = currentScore ** 1;
    }

    currentIndex = currentIndex + 1;

    // 특수문자 처리
    if (dartResult[currentIndex] === '#') {
      currentScore = -currentScore;
      currentIndex = currentIndex + 1;
    } else if (dartResult[currentIndex] === '*') {
      currentScore = currentScore * 2;
      answerArray[answerArray.length - 1] = answerArray[answerArray.length - 1] * 2;
      currentIndex = currentIndex + 1;
    }

    answerArray.push(currentScore);
  }

  return answerArray.reduce((prev, curr) => prev + curr, 0);
}

// function solution(dartResult) {
//   const bonus = { S: 1, D: 2, T: 3 },
//     options = { '*': 2, '#': -1, undefined: 1 };

//   let darts = dartResult.match(/\d.?\D/g);
//   console.log(darts);

//   for (let i = 0; i < darts.length; i++) {
//     let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
//       score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];
//     console.log(split);
//     if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

//     darts[i] = score;
//   }

//   return darts.reduce((a, b) => a + b);
// }
