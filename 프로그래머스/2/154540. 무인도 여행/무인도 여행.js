function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0]
    ];
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    const isInBounds = (x, y) => x >= 0 && y >= 0 && x < rows && y < cols;

    const bfs = (startX, startY) => {
        let queue = [[startX, startY]];
        let totalFood = 0;
        visited[startX][startY] = true;

        while (queue.length > 0) {
            const [x, y] = queue.shift();
            totalFood += Number(maps[x][y]);

            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;

                if (isInBounds(nx, ny) && !visited[nx][ny] && maps[nx][ny] !== 'X') {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }

        return totalFood;
    };

    const results = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (!visited[i][j] && maps[i][j] !== 'X') {
                results.push(bfs(i, j));
            }
        }
    }

    return results.length > 0 ? results.sort((a, b) => a - b) : [-1];
}