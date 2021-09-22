function sumNum(num1, num2) {

    let result = 0;

    n1 = Number(num1);
    n2 = Number(num2);

    for (let i = n1; i <= n2; i++) {
        result += i;
    }
    
    console.log(result);
}

sumNum('1', '5');
sumNum('-8', '20');