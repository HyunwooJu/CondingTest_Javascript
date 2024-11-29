function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    let multiplier = [781, 156, 31, 6, 1]; // 각 자리에서 가중치를 미리 계산
    let index = 0;

    for (let i = 0; i < word.length; i++) {
        const charIndex = vowels.indexOf(word[i]);
        index += charIndex * multiplier[i] + 1; // 현재 문자의 가중치와 위치를 합산
    }

    return index;
}
