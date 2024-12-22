function solution(brown, yellow) {
    for (let height = 3; height <= (brown + yellow) / height; height++) {
        const width = (brown + yellow) / height;
        if (Number.isInteger(width) && (width - 2) * (height - 2) === yellow) {
            return [width, height];
        }
    }
    return [];
}
