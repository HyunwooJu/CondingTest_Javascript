function solution(phone_book) {
    // 전화번호부를 오름차순으로 정렬합니다.
    phone_book.sort();

    // 정렬된 배열에서 인접한 두 번호를 비교합니다.
    for (let i = 0; i < phone_book.length - 1; i++) {
        // 현재 번호가 다음 번호의 접두사인지 확인합니다.
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            return false; // 접두사가 발견되면 false를 반환합니다.
        }
    }

    // 접두사가 발견되지 않았다면 true를 반환합니다.
    return true;
}
