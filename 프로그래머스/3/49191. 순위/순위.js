function solution(n, results) {
    // 각 선수의 승리 및 패배를 저장할 그래프 초기화
    const wins = Array.from({ length: n + 1 }, () => new Set());
    const losses = Array.from({ length: n + 1 }, () => new Set());

    // 경기 결과를 그래프에 반영
    results.forEach(([winner, loser]) => {
        wins[winner].add(loser); // winner가 이긴 선수 추가
        losses[loser].add(winner); // loser가 진 선수 추가
    });

    // 전이 관계 확장
    for (let i = 1; i <= n; i++) {
        // i가 이긴 선수(loser)의 상대(wins)를 i의 wins에 추가
        for (const loser of wins[i]) {
            wins[loser].forEach((opponent) => wins[i].add(opponent));
        }
        // i가 진 선수(winner)의 상대(losses)를 i의 losses에 추가
        for (const winner of losses[i]) {
            losses[winner].forEach((opponent) => losses[i].add(opponent));
        }
    }

    // 순위를 확정할 수 있는 선수 계산
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (wins[i].size + losses[i].size === n - 1) {
            count++;
        }
    }

    return count;
}
