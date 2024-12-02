function solution(n, wires) {
    const graph = Array.from({ length: n + 1 }, () => []);

    // 그래프 구성
    for (const [v1, v2] of wires) {
        graph[v1].push(v2);
        graph[v2].push(v1);
    }

    // BFS를 이용해 송전탑 개수 계산
    const countNodes = (start, blocked) => {
        const visited = Array(n + 1).fill(false);
        const queue = [start];
        visited[start] = true;
        let count = 1;

        while (queue.length > 0) {
            const current = queue.shift();

            for (const neighbor of graph[current]) {
                if (!visited[neighbor] && neighbor !== blocked) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                    count++;
                }
            }
        }

        return count;
    };

    let minDifference = Infinity;

    // 각 전선을 끊어가며 최소 차이 계산
    for (const [v1, v2] of wires) {
        const count1 = countNodes(v1, v2);
        const count2 = n - count1;
        minDifference = Math.min(minDifference, Math.abs(count1 - count2));
    }

    return minDifference;
}