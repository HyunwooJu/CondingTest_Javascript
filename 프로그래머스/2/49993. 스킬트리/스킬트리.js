function solution(skill, skill_trees) {
    // 주어진 스킬 순서에 맞는 스킬 트리인지 확인하는 함수
    const isValidSkillTree = (tree) => {
        // 스킬 트리에서 skill에 포함된 문자만 추출
        const filtered = [...tree].filter(char => skill.includes(char));
        
        // 추출된 문자들이 skill의 접두사인지 확인
        return skill.startsWith(filtered.join(''));
    };
    
    // 유효한 스킬 트리 개수를 계산
    const validCount = skill_trees.filter(isValidSkillTree).length;
    
    return validCount;
}