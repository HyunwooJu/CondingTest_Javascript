function solution(topping) {
    let answer = 0;
    const leftSet = new Set();
    const rightMap = new Map();

    // 초기 상태에서 모든 토핑을 rightMap에 넣음
    for (const t of topping) {
        rightMap.set(t, (rightMap.get(t) || 0) + 1);
    }

    // 배열을 순회하며 공평한 분할 가능 여부 확인
    for (const t of topping) {
        // 왼쪽에 현재 토핑 추가
        leftSet.add(t);
        
        // 오른쪽에서 현재 토핑 제거
        if (rightMap.get(t) === 1) {
            rightMap.delete(t);
        } else {
            rightMap.set(t, rightMap.get(t) - 1);
        }

        // 토핑 종류가 같으면 공평한 분할 가능
        if (leftSet.size === rightMap.size) {
            answer++;
        }
    }

    return answer;
}
