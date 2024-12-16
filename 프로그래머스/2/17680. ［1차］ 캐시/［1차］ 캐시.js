function solution(cacheSize, cities) {
    // 대소문자를 구분하지 않으므로 모든 도시 이름을 소문자로 변환
    const normalizedCities = cities.map(city => city.toLowerCase());

    // 캐시를 저장할 Map 생성 (LRU를 구현하기 위해 사용)
    const cache = new Map();
    let totalTime = 0;

    for (const city of normalizedCities) {
        if (cache.has(city)) {
            // 캐시 히트: 실행 시간 1 추가, 해당 항목을 최신으로 갱신
            totalTime += 1;
            cache.delete(city);
        } else {
            // 캐시 미스: 실행 시간 5 추가
            totalTime += 5;
            if (cache.size >= cacheSize && cacheSize > 0) {
                // 캐시가 가득 찬 경우 가장 오래된 항목 삭제
                const oldestKey = cache.keys().next().value;
                cache.delete(oldestKey);
            }
        }
        // 현재 도시를 캐시에 추가 (최신 항목으로 갱신)
        if (cacheSize > 0) cache.set(city, true);
    }

    return totalTime;
}