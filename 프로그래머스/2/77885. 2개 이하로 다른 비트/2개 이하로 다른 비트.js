function solution(numbers) {
    return numbers.map((num) => {
        let n = BigInt(num);

        if (n % 2n === 0n) {
            // 짝수: 비트가 1개 다른 수
            return Number(n + 1n);
        } else {
            // 홀수: 가장 낮은 0을 1로 바꾸고, 그 다음 비트를 조정
            let lowestZeroBit = (~n & (n + 1n)); // 가장 낮은 0 비트
            return Number(n + lowestZeroBit - (lowestZeroBit >> 1n));
        }
    });
}