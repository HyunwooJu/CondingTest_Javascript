function solution(number, k) {
    const stack = [];
    let removeCount = 0;

    for (const digit of number) {
        while (
            removeCount < k &&
            stack.length > 0 &&
            stack[stack.length - 1] < digit
        ) {
            stack.pop();
            removeCount++;
        }
        stack.push(digit);
    }

    // 필요한 만큼 더 제거하기
    while (removeCount < k) {
        stack.pop();
        removeCount++;
    }

    return stack.join('');
}
