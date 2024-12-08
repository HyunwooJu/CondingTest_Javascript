function solution(record) {
    const userMap = new Map(); // 유저 아이디와 닉네임 매핑
    const actions = []; // 최종 메시지 기록

    // 첫 번째 순회: 유저 상태와 최종 닉네임 업데이트
    for (const entry of record) {
        const [action, uid, nickname] = entry.split(' ');
        if (action !== 'Leave') {
            userMap.set(uid, nickname); // 닉네임 업데이트
        }
        if (action !== 'Change') {
            actions.push([action, uid]); // Enter, Leave 동작 기록
        }
    }

    // 두 번째 순회: 기록 변환
    return actions.map(([action, uid]) => {
        const nickname = userMap.get(uid);
        return action === 'Enter'
            ? `${nickname}님이 들어왔습니다.`
            : `${nickname}님이 나갔습니다.`;
    });
}