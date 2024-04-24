function solution(numbers) {
    // 배열의 모든 원소를 더함
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    // 배열의 길이로 나누어 평균을 구함
    const average = sum / numbers.length;
    
    // 평균값이 .0 또는 .5인 경우에는 그대로 반환하고, 아닌 경우에는 올림하여 반환
    if (average % 1 === 0 || average % 1 === 0.5) {
        return average;
    } else {
        return Math.ceil(average);
    }
}

// 테스트 케이스
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 5.5
console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99])); // 94.0
