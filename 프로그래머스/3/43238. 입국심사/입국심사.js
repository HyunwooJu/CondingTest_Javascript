function solution(n, times) {
    // 심사를 받는 데 걸리는 시간을 오름차순 정렬
    times.sort((a, b) => a - b);
    
    let left = 1; // 최소 시간
    let right = n * Math.max(...times); // 최대 시간
    let answer = right;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // 중간 시간
        const peopleProcessed = times.reduce((sum, time) => sum + Math.floor(mid / time), 0);

        if (peopleProcessed >= n) {
            answer = mid; // 최소 시간을 갱신
            right = mid - 1; // 더 적은 시간으로도 가능한지 확인
        } else {
            left = mid + 1; // 더 많은 시간이 필요함
        }
    }

    return answer;
}
