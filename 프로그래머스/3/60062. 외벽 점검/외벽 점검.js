function solution(n, weak, dist) {
    const len = weak.length;
    const extendedWeak = [...weak, ...weak.map(w => w + n)]; // 원형을 직선으로 변환
    dist.sort((a, b) => b - a); // 친구의 거리를 내림차순으로 정렬

    const permute = (arr) => {
        if (arr.length === 1) return [arr];
        const result = [];
        arr.forEach((fixed, idx, self) => {
            const rest = [...self.slice(0, idx), ...self.slice(idx + 1)];
            const permutations = permute(rest);
            const attached = permutations.map(p => [fixed, ...p]);
            result.push(...attached);
        });
        return result;
    };

    for (let friendsCount = 1; friendsCount <= dist.length; friendsCount++) {
        const friendsPermutations = permute(dist.slice(0, friendsCount));

        for (let start = 0; start < len; start++) {
            for (const friends of friendsPermutations) {
                let idx = start;
                for (const friend of friends) {
                    const coverage = extendedWeak[idx] + friend;
                    while (idx < start + len && extendedWeak[idx] <= coverage) {
                        idx++;
                    }
                    if (idx >= start + len) return friendsCount; // 모든 약점을 커버한 경우
                }
            }
        }
    }

    return -1; // 모든 경우를 탐색했지만 불가능한 경우
}
