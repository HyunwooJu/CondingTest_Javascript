function solution(num) {
    let count = 0;
    
    while (num !== 1) {
        if (count === 500) return -1; // 500번 반복해도 1이 되지 않는 경우
        if (num % 2 === 0) { // 짝수인 경우
            num /= 2;
        } else { // 홀수인 경우
            num = num * 3 + 1;
        }
        count++;
    }
    
    return count;
}