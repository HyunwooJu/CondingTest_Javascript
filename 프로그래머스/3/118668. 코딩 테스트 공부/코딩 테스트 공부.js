function solution(alp, cop, problems) {
    // 초기값 설정
    const maxAlp = Math.max(alp, ...problems.map(p => p[0]));
    const maxCop = Math.max(cop, ...problems.map(p => p[1]));

    // DP 테이블 초기화
    const dp = Array.from({ length: maxAlp + 1 }, () => Array(maxCop + 1).fill(Infinity));
    dp[alp][cop] = 0;

    // DP 계산 시작
    for (let curAlp = alp; curAlp <= maxAlp; curAlp++) {
        for (let curCop = cop; curCop <= maxCop; curCop++) {
            if (dp[curAlp][curCop] === Infinity) continue; // 불필요한 계산 방지

            // 알고리즘 공부로 알고력을 1 증가
            if (curAlp + 1 <= maxAlp) {
                dp[curAlp + 1][curCop] = Math.min(dp[curAlp + 1][curCop], dp[curAlp][curCop] + 1);
            }

            // 코딩 공부로 코딩력을 1 증가
            if (curCop + 1 <= maxCop) {
                dp[curAlp][curCop + 1] = Math.min(dp[curAlp][curCop + 1], dp[curAlp][curCop] + 1);
            }

            // 문제를 풀어서 능력치 증가
            for (const [reqAlp, reqCop, rwdAlp, rwdCop, cost] of problems) {
                if (curAlp >= reqAlp && curCop >= reqCop) {
                    const nextAlp = Math.min(maxAlp, curAlp + rwdAlp);
                    const nextCop = Math.min(maxCop, curCop + rwdCop);

                    // DP 테이블 업데이트 최적화
                    if (dp[curAlp][curCop] + cost < dp[nextAlp][nextCop]) {
                        dp[nextAlp][nextCop] = dp[curAlp][curCop] + cost;
                    }
                }
            }
        }
    }

    return dp[maxAlp][maxCop];
}