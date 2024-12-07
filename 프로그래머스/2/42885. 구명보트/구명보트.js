function solution(people, limit) {
    // 사람들의 몸무게를 오름차순으로 정렬
    people.sort((a, b) => a - b);

    let left = 0; // 가장 가벼운 사람의 인덱스
    let right = people.length - 1; // 가장 무거운 사람의 인덱스
    let boats = 0; // 필요한 구명보트의 수

    while (left <= right) {
        // 가장 가벼운 사람과 가장 무거운 사람의 몸무게 합이 제한 이내인지 확인
        if (people[left] + people[right] <= limit) {
            left++; // 가장 가벼운 사람을 태운다
        }
        // 가장 무거운 사람은 항상 태운다
        right--;
        boats++; // 보트를 하나 사용
    }

    return boats; // 총 필요한 보트 수 반환
}