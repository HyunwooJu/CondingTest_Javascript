function solution(places) {
    const checkRoom = (room) => {
        const directions = [
            [-1, 0], [1, 0], [0, -1], [0, 1], // 상하좌우
            [-1, -1], [-1, 1], [1, -1], [1, 1] // 대각선
        ];

        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                if (room[row][col] === 'P') {
                    // 상하좌우 체크
                    for (const [dx, dy] of directions.slice(0, 4)) {
                        const [nx, ny] = [row + dx, col + dy];
                        if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
                            if (room[nx][ny] === 'P') return 0; // 바로 옆에 참가자가 있는 경우
                            if (room[nx][ny] === 'O') {
                                // 빈 공간 뒤 확인
                                for (const [dx2, dy2] of directions.slice(0, 4)) {
                                    const [nnx, nny] = [nx + dx2, ny + dy2];
                                    if (
                                        (nnx !== row || nny !== col) &&
                                        nnx >= 0 && nnx < 5 &&
                                        nny >= 0 && nny < 5 &&
                                        room[nnx][nny] === 'P'
                                    ) return 0;
                                }
                            }
                        }
                    }

                    // 대각선 체크
                    for (const [dx, dy] of directions.slice(4)) {
                        const [nx, ny] = [row + dx, col + dy];
                        if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5 && room[nx][ny] === 'P') {
                            if (room[row][ny] !== 'X' || room[nx][col] !== 'X') return 0;
                        }
                    }
                }
            }
        }
        return 1; // 모든 규칙을 지킨 경우
    };

    return places.map((place) => checkRoom(place.map((row) => row.split(''))));
}
