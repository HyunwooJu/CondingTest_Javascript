function solution(num) {
    var answer = '';
    if (num % 2 === 0) {
        answer = "Even";
    } else {
        answer = "Odd";
    }
    return answer;
}

// 테스트
console.log("Odd 출력 => ", solution(3)); // "Odd 출력"
console.log("Even 출력 => ", solution(4)); // "Even 출력"