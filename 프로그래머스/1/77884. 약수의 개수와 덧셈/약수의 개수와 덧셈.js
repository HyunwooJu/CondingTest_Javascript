function solution(left, right) {
    let answer = 0;

    for (let i = left; i <= right; i++) {
        // i가 제곱수인지 확인
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }

    return answer;
}