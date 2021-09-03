function barcodeGenerator(params) {

    let startNumber = Number(params[0]);
    let endNumber = Number(params[1]);

    let output = '';

    let startDigit1 = Math.floor((startNumber / 1000) % 10)
    let startDigit2 = Math.floor((startNumber / 100) % 10)
    let startDigit3 = Math.floor((startNumber / 10) % 10)
    let startDigit4 = Math.floor(startNumber % 10)

    let endDigit1 = Math.floor((endNumber / 1000) % 10)
    let endDigit2 = Math.floor((endNumber / 100) % 10)
    let endDigit3 = Math.floor((endNumber / 10) % 10)
    let endDigit4 = Math.floor(endNumber % 10)

    for (let a = startDigit1; a <= endDigit1; a++) {
        if (a % 2 !== 0) {
            for (let b = startDigit2; b <= endDigit2; b++) {
                if (b % 2 !== 0) {
                    for (let c = startDigit3; c <= endDigit3; c++) {
                        if (c % 2 !== 0) {
                            for (let d = startDigit4; d <= endDigit4; d++) {
                                if (d % 2 !== 0) {
                                    output += `${a}${b}${c}${d} `
                                }
                            }
                        }
                    }

                }
            }
        }
    }

    console.log(output);
}

barcodeGenerator(["2345", "6789"])
