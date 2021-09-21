function sortingNumbers(params) {

    params.sort();

    let result = []

    for (let i = 0; i < params.length; i++) {

        result.push(params.shift())
        result.push(params.pop())
    }
    
    return result
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
