function solution(absolutes, signs) {
    return absolutes.reduce((acc, num, index) => acc + (signs[index] ? num : -num), 0);
}
