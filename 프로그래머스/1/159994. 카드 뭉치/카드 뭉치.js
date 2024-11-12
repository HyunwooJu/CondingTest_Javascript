const solution = (cards1, cards2, goal) => {
    let index1 = 0;
    let index2 = 0;

    for (const word of goal) {
        if (index1 < cards1.length && cards1[index1] === word) {
            index1++;
        } else if (index2 < cards2.length && cards2[index2] === word) {
            index2++;
        } else {
            return "No"; 
        }
    }

    return "Yes"; 
};
