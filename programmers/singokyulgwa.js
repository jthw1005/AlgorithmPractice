function solution(id_list, report, k) {
  const usrNotifyList = {};
  const uniqueReport = [...new Set(report)];
  const reportLength = uniqueReport.length;
  const answer = new Array(id_list.length).fill(0);

  for (let i = 0; i < reportLength; i++) {
    const wordsArray = uniqueReport[i].split(" ");
    if (!usrNotifyList.hasOwnProperty(wordsArray[1])) {
      usrNotifyList[wordsArray[1]] = [];
    }
    usrNotifyList[wordsArray[1]].push(wordsArray[0]);
  }

  for (let i in usrNotifyList) {
    if (usrNotifyList[i].length >= k) {
      usrNotifyList[i].forEach((el) => {
        id_list.forEach((elIn, idxIn) => {
          if (el === elIn) answer[idxIn]++;
        });
      });
    }
  }

  return answer;
}
