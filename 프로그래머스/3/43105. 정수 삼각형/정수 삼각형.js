function solution(triangle) {
    const dp = [...triangle]; // 원본 배열을 수정하지 않기 위해 삼각형 배열을 복사

    for (let row = dp.length - 2; row >= 0; row--) {
        for (let col = 0; col < dp[row].length; col++) {
            dp[row][col] += Math.max(dp[row + 1][col], dp[row + 1][col + 1]);
        }
    }

    return dp[0][0]; // 삼각형 꼭대기에 저장된 최댓값 반환
}
