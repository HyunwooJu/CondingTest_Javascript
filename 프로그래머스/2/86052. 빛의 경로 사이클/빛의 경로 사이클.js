function solution(grid) {
    const numRows = grid.length;
    const numCols = grid[0].length;
    const visited = Array.from({ length: numRows }, () =>
        Array.from({ length: numCols }, () => Array(4).fill(false))
    );

    const directions = [
        [-1, 0], // Up
        [0, 1],  // Right
        [1, 0],  // Down
        [0, -1], // Left
    ];

    const turn = {
        S: (dir) => dir,
        L: (dir) => (dir + 3) % 4,
        R: (dir) => (dir + 1) % 4,
    };

    const cycles = [];

    const move = (x, y, dir) => {
        const newX = (x + directions[dir][0] + numRows) % numRows;
        const newY = (y + directions[dir][1] + numCols) % numCols;
        return [newX, newY];
    };

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            for (let dir = 0; dir < 4; dir++) {
                if (visited[row][col][dir]) continue;

                let length = 0;
                let x = row, y = col, d = dir;

                while (!visited[x][y][d]) {
                    visited[x][y][d] = true;
                    length++;
                    d = turn[grid[x][y]](d);
                    [x, y] = move(x, y, d);
                }

                cycles.push(length);
            }
        }
    }

    return cycles.sort((a, b) => a - b);
}
