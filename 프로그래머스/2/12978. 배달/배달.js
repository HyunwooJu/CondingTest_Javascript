function solution(N, road, K) {
    // 각 마을 간의 최단 거리를 계산하기 위해 인접 리스트 생성
    const graph = Array.from({ length: N + 1 }, () => []);

    // 도로 정보를 그래프에 추가
    road.forEach(([a, b, c]) => {
        graph[a].push({ to: b, cost: c });
        graph[b].push({ to: a, cost: c });
    });

    // 다익스트라 알고리즘용 우선순위 큐 (최소 힙)
    const minHeap = [{ to: 1, cost: 0 }];
    const distances = Array(N + 1).fill(Infinity);
    distances[1] = 0; // 1번 마을의 거리는 0으로 설정

    while (minHeap.length > 0) {
        // 현재 최소 비용의 노드를 꺼냄
        const { to: current, cost } = minHeap.pop();

        // 기존 거리보다 큰 경우 무시
        if (cost > distances[current]) continue;

        // 현재 노드와 연결된 노드들 확인
        for (const { to: next, cost: nextCost } of graph[current]) {
            const newCost = cost + nextCost;

            // 더 짧은 경로를 발견한 경우
            if (newCost < distances[next]) {
                distances[next] = newCost;
                // 최소 힙에 새로운 경로 추가
                minHeap.push({ to: next, cost: newCost });
                // 우선순위 큐를 비용 기준으로 재정렬
                minHeap.sort((a, b) => b.cost - a.cost); // 내림차순 정렬
            }
        }
    }

    // K 이하의 시간 내에 배달 가능한 마을의 개수를 반환
    return distances.filter((distance) => distance <= K).length;
}
