function solution(n, t, m, p) {
    const answer = [];
    let sequence = '';
    let num = 0;

    // 필요한 숫자의 시퀀스를 생성 (모든 참가자가 말해야 하는 숫자를 포함하도록 충분히 생성)
    while (sequence.length < t * m) {
        sequence += num.toString(n).toUpperCase(); // 숫자를 n진수로 변환 후 대문자로 추가
        num++;
    }

    // 튜브가 말해야 하는 숫자를 추출
    for (let i = 0; i < t; i++) {
        answer.push(sequence[(i * m) + (p - 1)]); // 튜브의 순서에 해당하는 숫자 선택
    }

    // 결과를 문자열로 반환
    return answer.join('');
}
