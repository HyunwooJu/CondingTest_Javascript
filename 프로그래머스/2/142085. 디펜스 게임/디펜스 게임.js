function solution(n, k, enemy) {
    let left = 0;
    let right = enemy.length;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // 방어 가능한 라운드의 중간값
        const currentEnemies = enemy.slice(0, mid).sort((a, b) => b - a); // 적의 수를 내림차순 정렬

        let soldiers = n; // 남은 병사 수
        let invincibleUsed = 0; // 무적권 사용 횟수

        for (let i = 0; i < currentEnemies.length; i++) {
            if (invincibleUsed < k) {
                invincibleUsed++;
            } else {
                soldiers -= currentEnemies[i];
            }

            if (soldiers < 0) break; // 병사가 부족하면 중단
        }

        // 병사가 부족하지 않으면 더 많은 라운드를 시도
        if (soldiers >= 0) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right; // 마지막으로 성공한 라운드 수
}