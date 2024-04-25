function solution(a, b, n) {
    let emptyBottles = n; // 초기 빈 병의 개수를 설정합니다.
    let totalColas = 0; // 상빈이가 받은 콜라의 병 수를 저장할 변수를 초기화합니다.

    while (emptyBottles >= a) { // 빈 병의 개수가 마트에 가져다주는 병 수(a)보다 크거나 같을 때까지 반복합니다.
        // 마트에 빈 병을 가져다주고, 콜라를 받습니다.
        const colaBottles = Math.floor(emptyBottles / a) * b;
        // 받은 콜라의 병 수를 빈 병의 개수에 더합니다.
        totalColas += colaBottles;
        // 마트에서 받은 콜라의 병 수를 곱한 후 나머지를 빈 병의 개수로 갱신합니다.
        emptyBottles = (emptyBottles % a) + colaBottles;
    }

    return totalColas; // 최종적으로 상빈이가 받은 콜라의 병 수를 반환합니다.
}
