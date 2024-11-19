function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    let deliverRemain = 0; // 배달이 남은 상자
    let pickupRemain = 0;  // 수거가 남은 상자

    for (let i = n - 1; i >= 0; i--) {
        deliverRemain += deliveries[i];
        pickupRemain += pickups[i];

        // 필요한 이동 거리가 있을 경우에만 처리
        if (deliverRemain > 0 || pickupRemain > 0) {
            const trips = Math.ceil(Math.max(deliverRemain, pickupRemain) / cap);
            answer += (i + 1) * 2 * trips;

            // 해당 거리의 배달 및 수거 처리
            deliverRemain -= trips * cap;
            pickupRemain -= trips * cap;
        }
    }

    return answer;
}