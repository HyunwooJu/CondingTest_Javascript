function solution(k, d) {
    let answer = 0;

    // x축 방향으로 이동 가능한 범위를 계산
    for (let x = 0; x <= d; x += k) {
        // 원점과의 거리 제약 조건을 만족하는 y축 범위 계산
        const maxY = Math.floor(Math.sqrt(d ** 2 - x ** 2));

        // y축 방향으로 k 간격으로 점의 개수를 더함
        answer += Math.floor(maxY / k) + 1;
    }

    return answer;
}