function solution(n) {
    var answear = '';
    for (var i = 0; i < n; i++) {
        if (i % 2 === 0) {
            answear += '수';
        } else {
            answear += '박';
        }
    }
    return answear;
}