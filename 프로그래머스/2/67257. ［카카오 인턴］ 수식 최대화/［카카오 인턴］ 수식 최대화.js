// 연산자 우선순위에 따른 계산 함수
const calculate = (expression, operators) => {
    const tokens = expression.match(/\d+|[+\-*]/g);
    for (const operator of operators) {
        while (tokens.includes(operator)) {
            const idx = tokens.indexOf(operator);
            const [a, b] = [Number(tokens[idx - 1]), Number(tokens[idx + 1])];
            const result = operator === '+' ? a + b
                        : operator === '-' ? a - b
                        : a * b; // operator === '*'
            tokens.splice(idx - 1, 3, result); // 연산 결과로 대체
        }
    }
    return Math.abs(tokens[0]);
};

// 모든 우선순위 조합 생성 함수
const permute = (arr) => {
    if (arr.length <= 1) return [arr];
    return arr.flatMap((el, i) =>
        permute([...arr.slice(0, i), ...arr.slice(i + 1)]).map(p => [el, ...p])
    );
};

// 메인 함수
function solution(expression) {
    const operators = [...new Set(expression.match(/[+\-*]/g))];
    const priorities = permute(operators);

    return priorities.reduce((maxValue, priority) => {
        const value = calculate(expression, priority);
        return Math.max(maxValue, value);
    }, 0);
}