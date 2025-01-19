function solution(progresses, speeds) {
    // 각 작업이 완료되기까지 필요한 남은 일수를 계산
    const remainingDays = progresses.map((progress, index) => 
        Math.ceil((100 - progress) / speeds[index])
    );

    const answer = [];
    let maxDay = remainingDays[0]; // 현재 배포 기준일

    let count = 0; // 같은 배포로 묶일 기능 개수
    for (const day of remainingDays) {
        if (day <= maxDay) {
            // 배포 기준일보다 작거나 같으면 같은 배포로 묶음
            count++;
        } else {
            // 새로운 배포 기준일로 갱신하고 이전 카운트를 결과에 추가
            answer.push(count);
            count = 1; // 현재 기능부터 새 배포 시작
            maxDay = day; // 새로운 기준일 설정
        }
    }
    // 마지막 배포 그룹 추가
    answer.push(count);

    return answer;
}
