function solution(sequence, k) {
    let start = 0, sum = 0, minLength = Infinity, result = [];

    for (let end = 0; end < sequence.length; end++) {
        sum += sequence[end];

        while (sum > k) {
            sum -= sequence[start++];
        }

        if (sum === k && (end - start < minLength)) {
            minLength = end - start;
            result = [start, end];
        }
    }

    return result;
}