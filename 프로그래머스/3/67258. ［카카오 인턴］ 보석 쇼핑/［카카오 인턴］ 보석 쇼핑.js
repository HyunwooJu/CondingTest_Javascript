function solution(gems) {
    const gemTypes = new Set(gems).size; // 보석 종류 개수
    const gemCount = new Map(); // 현재 구간 내 보석 개수
    let start = 0;
    let end = 0;
    let minLength = gems.length + 1;
    let answer = [0, 0];

    while (end < gems.length) {
        // 보석 추가
        const gem = gems[end];
        gemCount.set(gem, (gemCount.get(gem) || 0) + 1);
        end++;

        // 모든 종류의 보석이 포함되었을 때 구간 축소 시도
        while (gemCount.size === gemTypes) {
            if (end - start < minLength) {
                minLength = end - start;
                answer = [start + 1, end]; // 1번 진열대 기준
            }
            const startGem = gems[start];
            gemCount.set(startGem, gemCount.get(startGem) - 1);
            if (gemCount.get(startGem) === 0) {
                gemCount.delete(startGem);
            }
            start++;
        }
    }

    return answer;
}
