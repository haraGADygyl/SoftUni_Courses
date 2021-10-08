function solve(arr) {

    let result = [];

    for (const item of arr) {
        if (item < 0) {
            result.unshift(item)
        } else {
            result.pop(item)
        }
    }

    for (const item of result) {
        console.log(item);
    }
}

solve([7, -2, 8, 9]);
console.log('-'.repeat(20));
solve([3, -2, 0, -1]);
