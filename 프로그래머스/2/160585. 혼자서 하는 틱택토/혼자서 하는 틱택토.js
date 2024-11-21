function solution(board) {
    const flatBoard = board.join(''); // 배열을 하나의 문자열로 합침
    const countO = [...flatBoard].filter(c => c === 'O').length;
    const countX = [...flatBoard].filter(c => c === 'X').length;

    // O와 X의 개수 조건
    if (countO !== countX && countO !== countX + 1) return 0;

    // 승리 조건 확인
    const wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // 가로
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // 세로
        [0, 4, 8], [2, 4, 6]             // 대각선
    ];

    const isWin = (player) => 
        wins.some(line => line.every(idx => flatBoard[idx] === player));
    
    const winO = isWin('O');
    const winX = isWin('X');

    // 승리 조건 충돌 확인
    if (winO && winX) return 0;
    if (winO && countO !== countX + 1) return 0;
    if (winX && countO !== countX) return 0;

    return 1;
}
