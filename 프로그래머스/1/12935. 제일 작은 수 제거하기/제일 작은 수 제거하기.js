function solution(arr) {
    // 배열의 길이가 1인 경우 빈 배열일 때 -1을 리턴
    if (arr.length === 1) return [-1];
    
    // 최솟값을 구함
    const min = Math.min(...arr);
    
    // 최솟값을 제외한 배열을 반환
    return arr.filter(num => num !== min);
}
