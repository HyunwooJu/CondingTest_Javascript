function solution(board) {
    const directions = [
        [0, 1],   // 오른쪽
        [0, -1],  // 왼쪽
        [1, 0],   // 아래
        [-1, 0]   // 위
    ];

    const numRows = board.length;
    const numCols = board[0].length;

    let start = null;
    let goal = null;

    // 시작점과 목표 위치 찾기
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (board[i][j] === 'R') start = [i, j];
            if (board[i][j] === 'G') goal = [i, j];
        }
    }

    if (!start || !goal) return -1;

    const isValid = (x, y) => x >= 0 && x < numRows && y >= 0 && y < numCols && board[x][y] !== 'D';

    const bfs = (start, goal) => {
        const queue = [[...start, 0]]; // [x, y, moves]
        const visited = Array.from({ length: numRows }, () => Array(numCols).fill(false));
        visited[start[0]][start[1]] = true;

        while (queue.length > 0) {
            const [x, y, moves] = queue.shift();

            if (x === goal[0] && y === goal[1]) return moves;

            for (const [dx, dy] of directions) {
                let nx = x;
                let ny = y;

                // 장애물 또는 가장자리에 도달할 때까지 이동
                while (isValid(nx + dx, ny + dy)) {
                    nx += dx;
                    ny += dy;
                }

                if (!visited[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny, moves + 1]);
                }
            }
        }

        return -1; // 목표 위치에 도달할 수 없는 경우
    };

    return bfs(start, goal);
}