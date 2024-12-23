function solution(citations) {
    // 배열을 내림차순으로 정렬
    const sortedCitations = citations.sort((a, b) => b - a);

    // H-Index 계산
    let hIndex = 0;
    for (let i = 0; i < sortedCitations.length; i++) {
        if (sortedCitations[i] >= i + 1) {
            hIndex = i + 1;
        } else {
            break;
        }
    }

    return hIndex;
}