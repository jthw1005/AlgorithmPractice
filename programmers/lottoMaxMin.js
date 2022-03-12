function solution(lottos, win_nums) {
    let numOfMatch = 0;
    let numOfZero = 0;

    lottos.forEach((el, idx) => {
        if (el === 0) numOfZero++;
        win_nums.forEach((ell, idxx) => {
            if (el === ell) numOfMatch++;
        });
    });

    const highestGrade = getLottoGrade(numOfMatch + numOfZero);
    const lowestGrade = getLottoGrade(numOfMatch);
    const answer = [highestGrade, lowestGrade];

    return answer;
}

function getLottoGrade(numOfCorrectNum) {
    if (numOfCorrectNum < 2) return 6;
    else return 7 - numOfCorrectNum;
}
