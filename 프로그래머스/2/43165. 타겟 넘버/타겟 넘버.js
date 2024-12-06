function solution(numbers, target) {
    let answer = 0;

    // 재귀적으로 모든 경우를 탐색합니다.
    function dfs(index, currentSum) {
        // 배열의 끝까지 탐색했을 때
        if (index === numbers.length) {
            if (currentSum === target) answer++;
            return;
        }

        // 현재 숫자를 더하거나 빼는 두 가지 경우를 시도합니다.
        dfs(index + 1, currentSum + numbers[index]);
        dfs(index + 1, currentSum - numbers[index]);
    }

    // 탐색 시작
    dfs(0, 0);

    return answer;
}
