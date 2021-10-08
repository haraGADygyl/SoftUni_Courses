function solve(arr) {

    let result = [arr[0]];
    let lastElement = arr[0];

    for (let index = 1; index < arr.length; index++) {
        if (arr[index] >= lastElement) {
            result.push(arr[index]);
            lastElement = arr[index]
        }
    }

    return result;
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));

console.log(solve([1,
    2,
    3,
    4]
));

console.log(solve([20,
    3,
    2,
    15,
    6,
    1]
));