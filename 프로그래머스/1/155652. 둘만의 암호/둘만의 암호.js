const solution = (s, skip, index) => {
    const skipSet = new Set(skip); // skip에 포함된 문자들을 Set으로 저장
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const filteredAlphabet = [...alphabet].filter(char => !skipSet.has(char)); // skip을 제외한 알파벳 목록 생성
    
    return [...s].map(char => {
        const currentIndex = filteredAlphabet.indexOf(char);
        const newIndex = (currentIndex + index) % filteredAlphabet.length;
        return filteredAlphabet[newIndex];
    }).join('');
};
