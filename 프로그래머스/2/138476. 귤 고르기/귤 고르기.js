function solution(k, tangerine) {
    const sizeCount = new Map();
    
    // 각 크기의 귤 개수를 카운팅합니다.
    tangerine.forEach(size => {
        sizeCount.set(size, (sizeCount.get(size) || 0) + 1);
    });
    
    // 개수가 많은 순으로 정렬합니다.
    const sortedCounts = [...sizeCount.values()].sort((a, b) => b - a);

    // 필요한 귤의 개수(k)를 채우며 종류의 수를 최소화합니다.
    let answer = 0;
    let total = 0;

    for (const count of sortedCounts) {
        total += count;
        answer++;
        if (total >= k) break;
    }

    return answer;
}
