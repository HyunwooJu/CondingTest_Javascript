const solution = (ingredient) => {
    let count = 0;
    const stack = [];
    
    ingredient.forEach((item) => {
        stack.push(item);
        if (stack.slice(-4).join('') === '1231') {
            stack.splice(-4);
            count++;
        }
    });
    
    return count;
};
