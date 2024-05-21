function solution(s) {
    // 길이가 4 혹은 6인지 확인
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    
    // 숫자로만 구성되어 있는지 확인
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i]) || s[i] === ' ') {
            return false;
        }
    }
    
    return true;
}