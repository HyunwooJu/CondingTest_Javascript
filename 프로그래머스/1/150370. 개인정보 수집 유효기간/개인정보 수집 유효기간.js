function solution(today, terms, privacies) {
    var answer = [];
    
    // 오늘 날짜를 일수로 변환
    const todayDate = today.split('.').map(Number);
    const todayInDays = todayDate[0] * 12 * 28 + todayDate[1] * 28 + todayDate[2];
    
    // 약관 종류와 유효기간을 딕셔너리로 저장
    let termDict = {};
    terms.forEach(term => {
        let [type, duration] = term.split(' ');
        termDict[type] = parseInt(duration);
    });
    
    // 개인정보 처리
    privacies.forEach((privacy, index) => {
        let [date, type] = privacy.split(' ');
        let [year, month, day] = date.split('.').map(Number);
        
        // 유효기간 더하기
        let expiryInDays = year * 12 * 28 + month * 28 + day + termDict[type] * 28 - 1;

        // 오늘 날짜와 비교하여 파기 여부 결정
        if (expiryInDays < todayInDays) {
            answer.push(index + 1);
        }
    });
    
    return answer;
}
