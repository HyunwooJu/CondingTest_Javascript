function solution(m, n, puddles) {
    const MOD = 1_000_000_007;
    
    // DP 배열 생성 및 초기화 (1행만 유지하여 메모리 최적화)
    let dp = Array(m).fill(0);
    dp[0] = 1; // 시작점 (0, 0)

    // 웅덩이를 Set으로 저장해 O(1)로 확인
    const puddleSet = new Set(puddles.map(([x, y]) => `${y - 1},${x - 1}`));

    // 행 단위로 DP 갱신
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < m; x++) {
            if (puddleSet.has(`${y},${x}`)) {
                dp[x] = 0; // 웅덩이는 경로 불가
            } else if (x > 0) {
                dp[x] = (dp[x] + dp[x - 1]) % MOD; // 왼쪽과 위쪽 경로를 더함
            }
        }
    }

    return dp[m - 1]; // 마지막 칸의 값이 결과
}
