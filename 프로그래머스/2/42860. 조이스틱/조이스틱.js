function solution(name) {
    const getCharMove = (char) => {
        const up = char.charCodeAt(0) - 'A'.charCodeAt(0);
        const down = 'Z'.charCodeAt(0) - char.charCodeAt(0) + 1;
        return Math.min(up, down);
    };

    const length = name.length;
    let moveCount = 0;

    for (let i = 0; i < length; i++) {
        moveCount += getCharMove(name[i]);
    }

    let minMove = length - 1; // 단순히 오른쪽으로 이동하는 경우

    for (let i = 0; i < length; i++) {
        let next = i + 1;

        // 연속된 'A' 구간 찾기
        while (next < length && name[next] === 'A') {
            next++;
        }

        // i까지 갔다가 뒤로 돌아가는 경우
        const backAndForth = i + (length - next) + Math.min(i, length - next);

        minMove = Math.min(minMove, backAndForth);
    }

    return moveCount + minMove;
}