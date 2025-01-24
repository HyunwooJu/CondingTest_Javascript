// n개의 수의 최소공배수를 계산하는 함수
const solution = (arr) => {
    // 최대공약수를 구하는 함수 (유클리드 호제법 활용)
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    // 두 수의 최소공배수를 구하는 함수
    const lcm = (a, b) => (a * b) / gcd(a, b);

    // 배열의 모든 수에 대해 최소공배수를 계산
    return arr.reduce((acc, cur) => lcm(acc, cur), 1);
};