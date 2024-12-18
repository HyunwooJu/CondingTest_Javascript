function solution(data, col, row_begin, row_end) {
    // 컬럼 정렬 및 기본키에 의한 정렬
    const sortedData = [...data].sort((a, b) => 
        a[col - 1] === b[col - 1] 
            ? b[0] - a[0] 
            : a[col - 1] - b[col - 1]
    );

    // S_i 계산 및 XOR 연산
    const result = sortedData
        .slice(row_begin - 1, row_end)
        .reduce((xorValue, row, idx) => {
            const Si = row.reduce((sum, value) => sum + (value % (row_begin + idx)), 0);
            return xorValue ^ Si;
        }, 0);

    return result;
}