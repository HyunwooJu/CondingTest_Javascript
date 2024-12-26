function solution(scores) {
    const wanho = scores[0];
    const wanhoSum = wanho[0] + wanho[1];

    // 1. 근무 태도 점수 내림차순, 동료 평가 점수 오름차순 정렬
    scores.sort((a, b) => b[0] - a[0] || a[1] - b[1]);

    let maxPeerScore = 0;
    let validScores = [];

    // 2. 인센티브 받을 수 있는 사원 필터링
    for (const score of scores) {
        if (score[1] >= maxPeerScore) {
            validScores.push(score);
            maxPeerScore = Math.max(maxPeerScore, score[1]);
        }
    }

    // 3. 유효 점수 목록에 완호가 없으면 -1 반환
    if (!validScores.some(score => score[0] === wanho[0] && score[1] === wanho[1])) {
        return -1;
    }

    // 4. 석차 계산
    validScores.sort((a, b) => b[0] + b[1] - (a[0] + a[1])); // 두 점수 합 내림차순 정렬
    let rank = 1;
    let prevSum = -1;
    let countAtRank = 0;

    for (const score of validScores) {
        const sum = score[0] + score[1];
        if (sum !== prevSum) {
            rank += countAtRank;
            countAtRank = 1;
            prevSum = sum;
        } else {
            countAtRank++;
        }

        if (score[0] === wanho[0] && score[1] === wanho[1]) {
            return rank;
        }
    }

    return -1;
}
