function solution(key, lock) {
    const rotate = (matrix) => {
        const size = matrix.length;
        const rotated = Array.from({ length: size }, () => Array(size).fill(0));
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                rotated[j][size - i - 1] = matrix[i][j];
            }
        }
        return rotated;
    };

    const isMatch = (key, lock, offsetX, offsetY) => {
        const N = lock.length;
        const M = key.length;

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                const keyX = i - offsetX;
                const keyY = j - offsetY;

                const keyValue =
                    keyX >= 0 && keyX < M && keyY >= 0 && keyY < M
                        ? key[keyX][keyY]
                        : 0;

                if (lock[i][j] + keyValue !== 1) {
                    return false;
                }
            }
        }
        return true;
    };

    const N = lock.length;
    const M = key.length;

    for (let r = 0; r < 4; r++) {
        for (let x = -M + 1; x < N; x++) {
            for (let y = -M + 1; y < N; y++) {
                if (isMatch(key, lock, x, y)) {
                    return true;
                }
            }
        }
        key = rotate(key);
    }

    return false;
}
