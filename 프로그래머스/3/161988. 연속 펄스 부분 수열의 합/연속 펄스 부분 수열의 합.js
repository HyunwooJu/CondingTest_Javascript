function solution(sequence) {
    // 펄스 수열 두 가지 경우 만들기
    const pulse1 = sequence.map((num, idx) => (idx % 2 === 0 ? num : -num));  // [1, -1, 1, -1, ...] 형태
    const pulse2 = sequence.map((num, idx) => (idx % 2 === 0 ? -num : num));  // [-1, 1, -1, 1, ...] 형태
    
    // Kadane's Algorithm을 활용한 최대 부분 합 구하기
    const maxSubArraySum = (arr) => {
        let maxSum = arr[0];
        let currentSum = arr[0];
        
        for (let i = 1; i < arr.length; i++) {
            currentSum = Math.max(arr[i], currentSum + arr[i]);
            maxSum = Math.max(maxSum, currentSum);
        }
        
        return maxSum;
    };
    
    // 두 가지 펄스 수열에 대한 최대 부분 합 구하기
    const max1 = maxSubArraySum(pulse1);
    const max2 = maxSubArraySum(pulse2);
    
    // 두 결과값 중 더 큰 값을 반환
    return Math.max(max1, max2);
}
