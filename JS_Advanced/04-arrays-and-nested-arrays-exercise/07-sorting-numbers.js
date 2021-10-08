function solve(arr) {

    arr.sort((a, b) => a - b);
    let stepsCount = arr.length / 2;
    let result = [];

    for (let index = 0; index < stepsCount; index++) {
        result.push(arr.shift());
        result.push(arr.pop())
    }

    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
