const solution = (targets) => {
    // 끝점 기준으로 정렬하여 최대한 많은 구간을 하나의 미사일로 커버할 수 있게 함
    targets.sort((a, b) => a[1] - b[1]);

    let missileCount = 0;
    let lastInterceptPosition = -1; // 가장 최근의 요격 미사일이 발사된 위치

    for (const [start, end] of targets) {
        // 현재 폭격 미사일의 시작점이 마지막 요격 위치보다 크면 새로운 미사일 발사 필요
        if (start >= lastInterceptPosition) {
            missileCount++;
            lastInterceptPosition = end; // 새로운 요격 미사일을 현재 구간의 끝점에 발사
        }
    }

    return missileCount;
};
