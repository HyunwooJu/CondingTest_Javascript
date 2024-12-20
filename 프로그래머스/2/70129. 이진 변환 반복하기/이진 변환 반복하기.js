function solution(s) {
    let [transformationCount, zeroCount] = [0, 0];

    while (s !== '1') {
        zeroCount += (s.match(/0/g) || []).length; // 0의 개수 카운트
        s = s.replace(/0/g, '').length.toString(2); // 0 제거 후 길이를 2진수로 변환
        transformationCount++;
    }

    return [transformationCount, zeroCount]; // [변환 횟수, 제거된 0의 개수]를 반환
}