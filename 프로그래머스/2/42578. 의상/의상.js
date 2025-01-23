function solution(clothes) {
    // 의상 종류별로 의상을 그룹화하여 Map으로 저장
    const clothesMap = new Map();

    // 의상을 Map에 추가하면서 각 종류별 의상 수를 계산
    clothes.forEach(([name, type]) => {
        clothesMap.set(type, (clothesMap.get(type) || 0) + 1);
    });

    // 조합의 수 계산: 각 종류별 (의상 수 + 1)을 곱한 후, 아무것도 입지 않는 경우(1)를 제외
    return [...clothesMap.values()].reduce((acc, count) => acc * (count + 1), 1) - 1;
}