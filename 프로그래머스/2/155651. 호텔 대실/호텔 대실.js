function solution(book_time) {
    const events = [];

    // 시간을 분 단위로 변환하고, 시작/종료 시간 이벤트 추가
    for (const [start, end] of book_time) {
        const startTime = parseInt(start.slice(0, 2)) * 60 + parseInt(start.slice(3));
        const endTime = parseInt(end.slice(0, 2)) * 60 + parseInt(end.slice(3)) + 10;
        events.push([startTime, 1]);  // 1은 방이 필요해지는 이벤트
        events.push([endTime, -1]);   // -1은 방이 비워지는 이벤트
    }

    // 이벤트를 시간순으로 정렬
    events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    let maxRooms = 0;
    let currentRooms = 0;

    // 이벤트를 처리하면서 최대 방의 개수 계산
    for (const [, event] of events) {
        currentRooms += event;
        maxRooms = Math.max(maxRooms, currentRooms);
    }

    return maxRooms;
}
