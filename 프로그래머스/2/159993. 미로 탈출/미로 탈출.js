function solution(maps) {
  const rows = maps.length;
  const cols = maps[0].length;

  const directions = [
    [0, 1], // 오른쪽
    [1, 0], // 아래
    [0, -1], // 왼쪽
    [-1, 0], // 위
  ];

  const findPosition = (char) => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (maps[i][j] === char) return [i, j];
      }
    }
    return null;
  };

  const bfs = (start, target) => {
    const queue = [[...start, 0]]; // [x, y, distance]
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    visited[start[0]][start[1]] = true;

    while (queue.length > 0) {
      const [x, y, dist] = queue.shift();

      if (maps[x][y] === target) return dist;

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < rows &&
          ny < cols &&
          !visited[nx][ny] &&
          maps[nx][ny] !== 'X'
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny, dist + 1]);
        }
      }
    }

    return -1; // 목표에 도달할 수 없는 경우
  };

  const start = findPosition('S');
  const lever = findPosition('L');
  const exit = findPosition('E');

  const toLever = bfs(start, 'L');
  if (toLever === -1) return -1;

  const toExit = bfs(lever, 'E');
  if (toExit === -1) return -1;

  return toLever + toExit;
}