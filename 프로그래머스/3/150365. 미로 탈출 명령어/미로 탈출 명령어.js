function solution(n, m, x, y, r, c, k) {
    // 가능한 방향과 그에 따른 문자와 이동 변화량
    const directions = [
        { dir: "d", dx: 1, dy: 0 },
        { dir: "l", dx: 0, dy: -1 },
        { dir: "r", dx: 0, dy: 1 },
        { dir: "u", dx: -1, dy: 0 }
    ];

    // 초기 상태 검증 (거리 조건 확인)
    const distance = Math.abs(r - x) + Math.abs(c - y);
    if (distance > k || (k - distance) % 2 !== 0) return "impossible";

    let result = "";
    const memo = new Set();

    function dfs(cx, cy, steps, path) {
        // 중단 조건: 이미 경로를 찾았거나 이동 횟수를 초과한 경우
        if (result || steps > k) return;

        // 탈출 조건: 목표 도달, 이동 횟수 정확히 k
        if (cx === r && cy === c && steps === k) {
            result = path;
            return;
        }

        // 메모이제이션 체크
        const key = `${cx},${cy},${steps}`;
        if (memo.has(key)) return;
        memo.add(key);

        // 사전순으로 탐색
        for (const { dir, dx, dy } of directions) {
            const nx = cx + dx;
            const ny = cy + dy;

            // 유효한 범위 내에서만 이동
            if (nx >= 1 && nx <= n && ny >= 1 && ny <= m) {
                dfs(nx, ny, steps + 1, path + dir);
            }
        }
    }

    // 탐색 시작
    dfs(x, y, 0, "");

    return result || "impossible";
}