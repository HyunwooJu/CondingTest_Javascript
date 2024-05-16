function solution(a, b) {
    var answear = 0;
    for (var i = 0; i < a.length; i++){
        answear += a[i] * b[i];
    }
    return answear;
}