function solution(survey, choices) {
    // 각 성격 유형의 점수를 저장할 객체
    const scores = {
        R: 0, T: 0,
        C: 0, F: 0,
        J: 0, M: 0,
        A: 0, N: 0
    };
    
    // 선택지에 따른 점수 매핑
    const scoreMap = [3, 2, 1, 0, 1, 2, 3];
    
    // 각 질문을 처리하여 점수를 계산
    survey.forEach((types, i) => {
        const [disagree, agree] = types;
        const choice = choices[i];
        const score = scoreMap[choice - 1];
        
        if (choice < 4) {
            scores[disagree] += score;
        } else if (choice > 4) {
            scores[agree] += score;
        }
    });
    
    // 성격 유형 결정
    const types = [
        ['R', 'T'],
        ['C', 'F'],
        ['J', 'M'],
        ['A', 'N']
    ];
    
    const result = types.map(([type1, type2]) => 
        scores[type1] >= scores[type2] ? type1 : type2
    ).join('');
    
    return result;
}
