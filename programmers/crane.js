function solution(board, moves) {
    let cnt = 0;
    const dollArray = [];
    const numOfMoves = moves.length;
    const sizeOfBoard = board.length;

    for (let i = 0; i < numOfMoves; i++) {
        for (let row = 0; row < sizeOfBoard; row++) {
            if (board[row][moves[i] - 1] !== 0) {
                if (board[row][moves[i] - 1] === dollArray[dollArray.length - 1]) {
                    cnt++;
                    dollArray.pop();
                } else {
                    dollArray.push(board[row][moves[i] - 1]);
                }
                board[row][moves[i] - 1] = 0;
                break;
            }
        }
    }

    return cnt * 2;
}
