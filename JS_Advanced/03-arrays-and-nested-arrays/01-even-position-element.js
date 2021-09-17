function evenPosition(params) {

    let evenIndexNums = []

    for (let i = 0; i < params.length; i++) {

        if (i % 2 == 0) {
            evenIndexNums.push(params[i])
        }
    }
    
    console.log(...evenIndexNums);
}

evenPosition(['20', '30', '40', '50', '60'])
evenPosition(['5', '10'])
