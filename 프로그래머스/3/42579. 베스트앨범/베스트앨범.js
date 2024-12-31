function solution(genres, plays) {
    const genreMap = new Map();

    // 장르별로 재생 횟수와 곡 정보 저장
    genres.forEach((genre, index) => {
        if (!genreMap.has(genre)) {
            genreMap.set(genre, { totalPlays: 0, songs: [] });
        }
        const genreData = genreMap.get(genre);
        genreData.totalPlays += plays[index];
        genreData.songs.push({ id: index, playCount: plays[index] });
    });

    // 장르별 총 재생 횟수 기준으로 정렬
    const sortedGenres = [...genreMap.entries()].sort((a, b) => b[1].totalPlays - a[1].totalPlays);

    const answer = [];

    // 각 장르에서 가장 많이 재생된 두 곡 선택
    sortedGenres.forEach(([genre, data]) => {
        const topSongs = data.songs
            .sort((a, b) => b.playCount - a.playCount || a.id - b.id)
            .slice(0, 2);
        topSongs.forEach(song => answer.push(song.id));
    });

    return answer;
}
