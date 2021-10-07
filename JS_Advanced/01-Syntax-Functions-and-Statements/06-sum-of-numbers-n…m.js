function solve(first, second) {
    
    let num1 = Number(first);
    let num2 = Number(second);
    let result = 0;

    for (let i = num1; i <= num2; i++) {
        result += i;
    }
    
    console.log(result);
}

solve('1', '5');
solve('-8', '20');
