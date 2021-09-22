function sortingNumbers(params) {

    function compareNumbers(a, b) {
        return a - b
    }

    params.sort(compareNumbers);

    let paramsLength = params.length/2

    let result = []

    for (let i = 0; i < paramsLength; i++) {

        result.push(params.shift())
        result.push(params.pop())
    }
    
    return result
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
