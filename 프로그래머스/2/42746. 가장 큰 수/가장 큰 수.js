// numbers 배열을 받아서 이어 붙여 만들 수 있는 가장 큰 수를 반환하는 함수
function solution(numbers) {
    // numbers 배열의 숫자를 문자열로 변환한 뒤, 두 숫자를 결합하여 내림차순 정렬
    const sortedNumbers = numbers
        .map(String) // 숫자를 문자열로 변환
        .sort((a, b) => (b + a) - (a + b)); // 두 문자열을 결합했을 때 더 큰 값이 앞에 오도록 정렬

    // 정렬된 숫자 배열을 이어 붙여 결과 생성
    const answer = sortedNumbers.join('');

    // 결과가 '0'으로만 이루어진 경우, 단일 '0' 반환
    return answer[0] === '0' ? '0' : answer;
}