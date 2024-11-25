function solution(m, n, startX, startY, balls) {
    const result = [];

    // 거리 제곱 계산 함수
    const calculateDistanceSquared = (x1, y1, x2, y2) => {
        return (x2 - x1) ** 2 + (y2 - y1) ** 2;
    };

    for (const [ballX, ballY] of balls) {
        let minDistance = Infinity;

        // 4개의 반사 경우를 계산
        const reflections = [
            [-ballX, ballY], // 좌측 벽 반사
            [2 * m - ballX, ballY], // 우측 벽 반사
            [ballX, -ballY], // 아래 벽 반사
            [ballX, 2 * n - ballY], // 위쪽 벽 반사
        ];

        // 각 경우에 대해 최소 거리를 계산
        for (const [refX, refY] of reflections) {
            // 반사된 공의 경로에 목표 공이 방해되지 않는 경우에만 거리 계산
            if (
                !(startX === ballX && startY > ballY && refY < ballY) &&
                !(startX === ballX && startY < ballY && refY > ballY) &&
                !(startY === ballY && startX > ballX && refX < ballX) &&
                !(startY === ballY && startX < ballX && refX > ballX)
            ) {
                const distance = calculateDistanceSquared(startX, startY, refX, refY);
                minDistance = Math.min(minDistance, distance);
            }
        }

        result.push(minDistance);
    }

    return result;
}
