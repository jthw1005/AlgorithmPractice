/**
 * 오픈채팅방
 * https://school.programmers.co.kr/learn/courses/30/lessons/42888
 */

function solution(record) {
  const map = {};
  const arr = record.map((el) => {
    return el.split(' ');
  });

  for (let i = 0; i < arr.length; i++) {
    const logMsg = arr[i][0];
    const userId = arr[i][1];
    const nickName = arr[i][2];
    if (logMsg === 'Leave') continue;
    map[userId] = nickName;
  }

  return arr
    .filter((el) => el[0] !== 'Change')
    .map((el) => {
      const logMsg = el[0];
      const userId = el[1];
      return `${map[userId]}님이 ${logMsg === 'Enter' ? '들어왔' : '나갔'}습니다.`;
    });
}

/*
13:05 시작
13:40 종료

[
"Enter uid1234 Muzi"
"Enter uid4567 Prodo"
"Leave uid1234"
"Enter uid1234 Prodo"
"Change uid4567 Ryan"
]
[
"Prodo님이 들어왔습니다."
"Ryan님이 들어왔습니다."
"Prodo님이 나갔습니다."
"Prodo님이 들어왔습니다."
]
*/
