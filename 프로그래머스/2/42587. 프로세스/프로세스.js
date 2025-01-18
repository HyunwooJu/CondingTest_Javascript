function solution(priorities, location) {
    let queue = priorities.map((priority, index) => ({ priority, index })); // 프로세스를 객체로 매핑
    let executionOrder = 0; // 실행 순서를 기록하는 변수

    while (queue.length > 0) {
        const current = queue.shift(); // 큐의 첫 번째 프로세스를 꺼냄

        // 현재 프로세스보다 높은 우선순위가 있는지 확인
        if (queue.some(process => process.priority > current.priority)) {
            queue.push(current); // 우선순위가 높은 프로세스가 있으면 다시 큐에 삽입
        } else {
            executionOrder++; // 현재 프로세스를 실행
            if (current.index === location) {
                return executionOrder; // 원하는 위치의 프로세스가 실행되면 반환
            }
        }
    }
}
