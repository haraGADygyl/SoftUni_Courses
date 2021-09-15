function sameNumber(number) {

    numberStr = String(number);
    let isSame = true;
    let sum = Number(numberStr[0]);

    for (let i = 1; i < numberStr.length; i++) {
        sum += Number(numberStr[i]);

        if (numberStr[i] !== numberStr[i - 1]) {
            isSame = false;
        }

    }

    console.log(isSame);
    console.log(sum);
}

// second solution

function sameNumber2(params) {

    
    let strNum = String(params);
    let firstNum = strNum[0];

    let sum2 = 0;
    let isSame2 = true;

    for (let i2 = 0; i2 < strNum.length; i2++) {
        sum2 += Number(strNum[i2])
    }

    for (let i3 = 1; i3 < strNum.length; i3++) {
        if (firstNum != strNum[i3]) {
            isSame2 = false;
            break;
        }
    }

    console.log(isSame2);
    console.log(sum2);
}

sameNumber(2222222);
sameNumber(1234);

sameNumber2(2222222);
sameNumber2(1234);