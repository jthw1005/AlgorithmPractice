function solution(array, command) {
    const answer = [];
    for (let i = 0; i < command.length; i++) {
        answer.push(main(array, command[i]));
    }
    return answer;
}

function main(array, command) {
    return array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)[command[2] - 1];
}
