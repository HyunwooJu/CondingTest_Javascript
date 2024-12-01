function solution(x, y, n) {
    if (x === y) return 0; // 이미 x와 y가 같다면 연산 필요 없음

    const dp = Array(y + 1).fill(Infinity); // dp[i]는 i에 도달하는 최소 연산 횟수
    dp[x] = 0;

    for (let i = x; i <= y; i++) {
        if (dp[i] === Infinity) continue; // 도달 불가능한 경우 건너뜀

        if (i + n <= y) dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
        if (i * 2 <= y) dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
        if (i * 3 <= y) dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
    }

    return dp[y] === Infinity ? -1 : dp[y]; // y에 도달할 수 없다면 -1 반환
}