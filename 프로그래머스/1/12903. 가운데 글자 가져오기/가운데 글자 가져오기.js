function solution(s) {
    var length = s.length;
    var mid = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        // 길이가 짝수인 경우, 가운데 두 글자를 반환
        return s[mid - 1] + s[mid];
    } else {
        // 길이가 홀수인 경우, 가운데 한 글자를 반환
        return s[mid];
    }
}
