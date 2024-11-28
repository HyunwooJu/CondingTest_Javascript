function solution(info, query) {
    const map = new Map();

    // 가능한 모든 조건 조합을 생성하여 Map에 저장
    const addToMap = (key, score) => {
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(score);
    };

    // info를 기반으로 모든 조건 조합 생성
    info.forEach((entry) => {
        const [lang, job, career, food, score] = entry.split(' ');
        const conditions = [lang, '-', job, '-', career, '-', food, '-'];
        const scoreInt = parseInt(score, 10);

        for (let i = 0; i < (1 << 4); i++) { // 4개의 조건에 대해 모든 조합
            let key = '';
            for (let j = 0; j < 4; j++) {
                key += (i & (1 << j)) ? conditions[j * 2] : conditions[j * 2 + 1];
            }
            addToMap(key, scoreInt);
        }
    });

    // 각 조건 조합에 대해 점수 배열을 오름차순 정렬
    map.forEach((scores) => scores.sort((a, b) => a - b));

    const answer = query.map((q) => {
        const [lang, _, job, __, career, ___, food, score] = q.split(' ');
        const key = `${lang}${job}${career}${food}`;
        const scoreInt = parseInt(score, 10);

        if (!map.has(key)) return 0;

        const scores = map.get(key);
        // 이진 탐색으로 조건을 만족하는 점수 개수 찾기
        let left = 0, right = scores.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (scores[mid] >= scoreInt) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return scores.length - left;
    });

    return answer;
}