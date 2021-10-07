function solve(number) {

    let numberString = String(number);
    let firstChar = numberString[0];

    let sum = 0;
    let isSame = true;

    for (let i = 0; i < numberString.length; i++) {

        sum += Number(numberString[i]);

        if (numberString[i] != firstChar) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}

solve(2222222);
solve(1234);
