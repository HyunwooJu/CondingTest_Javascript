function solution(n, roads, sources, destination) {
    // 1. 그래프 생성
    const graph = Array.from({ length: n + 1 }, () => []);
    roads.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    });

    // 2. BFS로 destination부터 최단 거리 계산
    const distances = Array(n + 1).fill(-1); // 거리 배열 초기화
    const queue = [destination];
    distances[destination] = 0;

    while (queue.length > 0) {
        const current = queue.shift();

        for (const neighbor of graph[current]) {
            if (distances[neighbor] === -1) { // 방문하지 않은 지역만 탐색
                distances[neighbor] = distances[current] + 1;
                queue.push(neighbor);
            }
        }
    }

    // 3. sources에 대해 결과 생성
    return sources.map(source => distances[source]);
}