function solution(user_id, banned_id) {
    // 특정 사용자 ID가 불량 사용자 패턴과 일치하는지 확인하는 함수
    const isMatch = (user, pattern) => {
        if (user.length !== pattern.length) return false; // 길이가 다르면 false 반환
        for (let i = 0; i < user.length; i++) {
            if (pattern[i] !== '*' && user[i] !== pattern[i]) return false; // 문자가 다르면 false 반환
        }
        return true; // 모든 조건이 만족되면 true 반환
    };

    // 각 불량 사용자 패턴에 대해 매칭되는 사용자 ID 목록 생성
    const matches = banned_id.map(pattern => {
        return user_id.filter(user => isMatch(user, pattern));
    });

    const resultSet = new Set();

    // 가능한 모든 조합을 탐색하는 재귀 함수
    const findCombinations = (index, currentSet) => {
        if (index === matches.length) {
            resultSet.add([...currentSet].sort().join(',')); // 정렬된 문자열로 고유 조합 생성
            return;
        }

        for (const user of matches[index]) {
            if (!currentSet.has(user)) { // 현재 조합에 없는 사용자만 추가
                currentSet.add(user);
                findCombinations(index + 1, currentSet); // 다음 단계로 이동
                currentSet.delete(user); // 탐색 후 사용자 제거
            }
        }
    };

    findCombinations(0, new Set());

    return resultSet.size; // 고유한 제재 아이디 조합의 개수 반환
}