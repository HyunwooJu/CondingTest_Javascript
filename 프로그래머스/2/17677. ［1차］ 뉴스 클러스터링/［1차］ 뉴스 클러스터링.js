function solution(str1, str2) {
    // 유효한 다중집합 원소 생성 함수
    const createMultiSet = (str) => {
        const multiSet = [];
        const normalizedStr = str.toLowerCase();

        for (let i = 0; i < normalizedStr.length - 1; i++) {
            const pair = normalizedStr.slice(i, i + 2);
            if (/^[a-z]{2}$/.test(pair)) {
                multiSet.push(pair);
            }
        }
        return multiSet;
    };

    // 다중집합 간 교집합과 합집합 계산 함수
    const getIntersectionAndUnion = (multiSet1, multiSet2) => {
        const map1 = new Map();
        const map2 = new Map();
        let intersectionSize = 0;
        let unionSize = 0;

        for (const element of multiSet1) {
            map1.set(element, (map1.get(element) || 0) + 1);
        }

        for (const element of multiSet2) {
            map2.set(element, (map2.get(element) || 0) + 1);
        }

        for (const [key, count1] of map1.entries()) {
            if (map2.has(key)) {
                const count2 = map2.get(key);
                intersectionSize += Math.min(count1, count2);
                unionSize += Math.max(count1, count2);
            } else {
                unionSize += count1;
            }
        }

        for (const [key, count2] of map2.entries()) {
            if (!map1.has(key)) {
                unionSize += count2;
            }
        }

        return { intersectionSize, unionSize };
    };

    const multiSet1 = createMultiSet(str1);
    const multiSet2 = createMultiSet(str2);

    // 두 집합이 모두 공집합인 경우
    if (multiSet1.length === 0 && multiSet2.length === 0) {
        return 65536;
    }

    const { intersectionSize, unionSize } = getIntersectionAndUnion(multiSet1, multiSet2);

    // 자카드 유사도 계산 및 정답 반환
    const jaccardSimilarity = intersectionSize / unionSize;
    return Math.floor(jaccardSimilarity * 65536);
}
