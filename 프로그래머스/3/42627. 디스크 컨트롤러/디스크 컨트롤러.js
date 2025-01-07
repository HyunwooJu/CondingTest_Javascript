function solution(jobs) {
    // 작업 요청 시간을 기준으로 정렬
    jobs.sort((a, b) => a[0] - b[0]);

    let currentTime = 0; // 현재 시각
    let totalTurnaroundTime = 0; // 총 반환 시간
    const priorityQueue = []; // 우선순위 큐 (Heap을 대체하기 위해 배열로 사용)

    let jobIndex = 0; // 현재 처리할 작업의 인덱스

    while (jobIndex < jobs.length || priorityQueue.length > 0) {
        // 현재 시각 이전에 요청된 작업들을 우선순위 큐에 추가
        while (jobIndex < jobs.length && jobs[jobIndex][0] <= currentTime) {
            priorityQueue.push(jobs[jobIndex]);
            jobIndex++;
        }

        // 우선순위 큐에서 작업 소요 시간이 가장 짧은 작업 선택
        if (priorityQueue.length > 0) {
            // 작업 소요 시간이 짧은 순으로 정렬
            priorityQueue.sort((a, b) => a[1] - b[1]);

            const [requestTime, duration] = priorityQueue.shift(); // 작업 추출
            currentTime += duration; // 작업 수행 후 현재 시각 갱신
            totalTurnaroundTime += currentTime - requestTime; // 반환 시간 계산
        } else {
            // 대기 중인 작업이 없다면 현재 시각을 다음 작업 요청 시간으로 이동
            currentTime = jobs[jobIndex][0];
        }
    }

    // 반환 시간의 평균을 계산 후 정수 부분만 반환
    return Math.floor(totalTurnaroundTime / jobs.length);
}
