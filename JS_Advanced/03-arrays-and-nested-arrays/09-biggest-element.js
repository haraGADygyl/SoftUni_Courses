function solve(arr) {

    let biggestNumber = arr[0][0];

    for (const outer of arr) {
        for (const inner of outer) {
            if (inner > biggestNumber) {
                biggestNumber = inner;
            }
        }
    }

    return biggestNumber;
}

console.log(solve([[20, 50, 10],
    [8, 33, 145]]
));

console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
));

console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 94]]
));