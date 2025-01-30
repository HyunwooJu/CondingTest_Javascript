function solution(bridge_length, weight, truck_weights) {
  let time = 0; // 경과 시간
  const bridge = Array(bridge_length).fill(0); // 다리를 나타내는 배열
  let totalWeight = 0; // 다리 위의 총 무게

  while (bridge.length > 0) {
    time++;

    // 다리에서 트럭이 나감
    totalWeight -= bridge.shift();

    // 대기 중인 트럭이 있는 경우
    if (truck_weights.length > 0) {
      // 다음 트럭이 다리 위로 올라갈 수 있는지 확인
      if (totalWeight + truck_weights[0] <= weight) {
        const nextTruck = truck_weights.shift();
        bridge.push(nextTruck); // 트럭 다리로 추가
        totalWeight += nextTruck; // 총 무게 갱신
      } else {
        // 트럭이 올라갈 수 없으면 0 추가 (빈 공간)
        bridge.push(0);
      }
    }
  }

  return time;
}