function solve(number = 5) {

    for (let i = 1; i <= number; i++) {
        console.log('* '.repeat(number));
    }
}

solve(1);
solve(2);
solve(5);
solve();