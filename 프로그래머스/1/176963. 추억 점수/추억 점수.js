const solution = (name, yearning, photo) => {
    const yearningMap = new Map(name.map((n, i) => [n, yearning[i]])); 
    
    return photo.map(persons =>
        persons.reduce((score, person) => score + (yearningMap.get(person) || 0), 0)
    );
};
