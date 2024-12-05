function solution(s) {
    const isValid = (str) => {
        const stack = [];
        const matching = { ')': '(', ']': '[', '}': '{' };

        for (const char of str) {
            if (['(', '[', '{'].includes(char)) {
                stack.push(char);
            } else if (stack.length > 0 && stack[stack.length - 1] === matching[char]) {
                stack.pop();
            } else {
                return false;
            }
        }

        return stack.length === 0;
    };

    let count = 0;
    const n = s.length;

    for (let i = 0; i < n; i++) {
        const rotated = s.slice(i) + s.slice(0, i); // 회전
        if (isValid(rotated)) {
            count++;
        }
    }

    return count;
}
