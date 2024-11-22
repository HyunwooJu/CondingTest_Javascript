function solution(weights) {
    let answer = 0;
    const weightCounts = new Map();

    // 각 무게의 빈도를 기록합니다.
    for (const weight of weights) {
        weightCounts.set(weight, (weightCounts.get(weight) || 0) + 1);
    }

    // 시소가 균형을 이루는 경우를 확인합니다.
    for (const [weight, count] of weightCounts) {
        // 같은 무게인 경우: 동일한 거리에 위치
        if (count > 1) {
            answer += (count * (count - 1)) / 2; // 조합 계산 (nC2)
        }

        // 다른 무게인 경우: 비율 계산
        const possibleRatios = [
            2 / 3, // 거리 2m와 3m
            2 / 4, // 거리 2m와 4m
            3 / 4, // 거리 3m와 4m
        ];

        for (const ratio of possibleRatios) {
            const matchingWeight = weight * ratio;
            if (weightCounts.has(matchingWeight)) {
                answer += count * weightCounts.get(matchingWeight);
            }
        }
    }

    return answer;
}
