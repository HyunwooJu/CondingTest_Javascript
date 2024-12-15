function solution(msg) {
    const dictionary = {}; // 사전 초기화
    const result = [];
    let dictSize = 26;

    // A-Z 사전 등록
    for (let i = 0; i < 26; i++) dictionary[String.fromCharCode(65 + i)] = i + 1;

    let w = ""; // 현재 입력 문자열
    for (const c of msg) {
        if (dictionary[w + c]) {
            w += c; // 사전에 존재하면 w에 글자 추가
        } else {
            result.push(dictionary[w]); // 현재 입력 w의 색인 번호 출력
            dictionary[w + c] = ++dictSize; // 새로운 문자열 w+c를 사전에 추가
            w = c; // 새로운 w 초기화
        }
    }
    if (w) result.push(dictionary[w]); // 마지막 문자열 색인 출력

    return result;
}
