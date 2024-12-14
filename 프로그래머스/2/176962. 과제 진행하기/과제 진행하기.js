// 주어진 과제 계획을 완료한 순서대로 반환하는 함수
function solution(plans) {
    const answer = [];
    const pausedTasks = []; // 멈춘 과제들을 저장할 스택

    // 시간을 분 단위로 변환하는 함수
    const timeToMinutes = (time) => {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    };

    // 분 단위를 시간 문자열로 변환하는 함수 (디버깅용, 현재 사용되지 않음)
    const minutesToTime = (minutes) => {
        const hours = Math.floor(minutes / 60).toString().padStart(2, "0");
        const mins = (minutes % 60).toString().padStart(2, "0");
        return `${hours}:${mins}`;
    };

    // plans를 시작 시간 기준으로 정렬
    plans.sort((a, b) => timeToMinutes(a[1]) - timeToMinutes(b[1]));

    let currentTime = 0; // 현재 시간 (분 단위)

    for (let i = 0; i < plans.length; i++) {
        const [name, start, playtime] = plans[i];
        const startTime = timeToMinutes(start);
        const duration = Number(playtime);

        // 현재 과제 시작 전까지 멈춘 과제를 처리
        while (pausedTasks.length > 0 && currentTime < startTime) {
            const [pausedName, remainingTime] = pausedTasks.pop();
            if (currentTime + remainingTime <= startTime) {
                currentTime += remainingTime;
                answer.push(pausedName); // 멈춘 과제를 완료
            } else {
                pausedTasks.push([pausedName, remainingTime - (startTime - currentTime)]);
                currentTime = startTime;
                break;
            }
        }

        // 새로운 과제를 시작
        currentTime = startTime;
        if (i + 1 < plans.length && startTime + duration > timeToMinutes(plans[i + 1][1])) {
            // 다음 과제 시작 전에 완료하지 못할 경우
            pausedTasks.push([name, startTime + duration - timeToMinutes(plans[i + 1][1])]);
            currentTime = timeToMinutes(plans[i + 1][1]);
        } else {
            // 과제를 완료할 수 있는 경우
            currentTime += duration;
            answer.push(name);
        }
    }

    // 남은 멈춘 과제를 처리
    while (pausedTasks.length > 0) {
        const [pausedName] = pausedTasks.pop();
        answer.push(pausedName);
    }

    return answer;
}