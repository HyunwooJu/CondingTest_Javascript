function solution(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}

// 테스트
console.log(solution([1, 2, 3, 4])); // 2.5 출력
console.log(solution([5, 5])); // 5 출력