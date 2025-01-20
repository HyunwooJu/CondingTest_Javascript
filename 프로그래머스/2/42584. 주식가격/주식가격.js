function solution(prices) {
  // 결과를 저장할 배열 생성
  const answer = Array(prices.length).fill(0);

  // 스택을 이용한 풀이 (효율성 고려)
  const stack = [];

  prices.forEach((price, i) => {
    // 현재 시점의 가격이 스택에 저장된 이전 시점보다 낮아지는 경우
    while (stack.length && prices[stack[stack.length - 1]] > price) {
      const prevIndex = stack.pop(); // 스택에서 이전 시점의 인덱스를 꺼냄
      answer[prevIndex] = i - prevIndex; // 현재 인덱스와의 차이를 저장
    }
    // 현재 시점의 인덱스를 스택에 추가
    stack.push(i);
  });

  // 스택에 남아 있는 인덱스 처리 (끝까지 가격이 떨어지지 않은 경우)
  while (stack.length) {
    const prevIndex = stack.pop();
    answer[prevIndex] = prices.length - 1 - prevIndex;
  }

  return answer;
}