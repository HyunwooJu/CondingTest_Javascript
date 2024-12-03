function solution(storey) {
    let answer = 0;

    while (storey > 0) {
        const remainder = storey % 10;
        
        if (remainder > 5 || (remainder === 5 && Math.floor(storey / 10) % 10 >= 5)) {
            answer += 10 - remainder;
            storey = Math.floor(storey / 10) + 1;
        } else {
            answer += remainder;
            storey = Math.floor(storey / 10);
        }
    }

    return answer;
}
