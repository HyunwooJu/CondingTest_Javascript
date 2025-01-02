function solution(stones, k) {
    // 이진 탐색의 시작과 끝
    let low = 1;
    let high = stones.reduce((max, val) => Math.max(max, val), 0); // Math.max 대신 reduce 사용

    // 최대 몇 명이 건널 수 있는지 찾기
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        // mid 명이 건널 수 있는지 확인
        if (canCross(stones, k, mid)) {
            low = mid + 1; // 더 많은 인원을 시도
        } else {
            high = mid - 1; // 인원을 줄여야 함
        }
    }

    return high;
}

// mid 명이 건널 수 있는지 확인하는 함수
function canCross(stones, k, mid) {
    let zeroCount = 0;

    for (const stone of stones) {
        if (stone < mid) {
            zeroCount++; // mid 명이 지나갈 때 0이 되는 돌의 연속 카운트 증가
            if (zeroCount >= k) return false; // k개 이상의 0이 발생하면 false
        } else {
            zeroCount = 0; // 다시 건널 수 있으면 연속 카운트 초기화
        }
    }

    return true; // 모든 돌을 다 지나갈 수 있으면 true
}
