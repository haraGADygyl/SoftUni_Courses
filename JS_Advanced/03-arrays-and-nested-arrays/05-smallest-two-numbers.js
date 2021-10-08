function solve(arr) {

    arr.sort((a, b) => a - b);

    console.log(arr.shift(), arr.shift());
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);
