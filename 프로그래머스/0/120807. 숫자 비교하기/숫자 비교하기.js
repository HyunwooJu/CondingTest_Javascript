function solution(num1, num2) {
    if (num1 === num2) {
        return 1;
    } else {
        return -1;
    }
}

// 테스트 케이스
console.log(solution(2, 3)); // -1
console.log(solution(11, 11)); // 1
console.log(solution(7, 99)); // -1
