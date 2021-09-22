function aggregate(params) {

    let sum = 0;
    let inverseSum = 0;
    let concatenateNumbers = '';

    for (let i = 0; i < params.length; i++) {
        sum += params[i]
        inverseSum += 1 / params[i]
        concatenateNumbers += String(params[i])
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(concatenateNumbers);
}

aggregate([1, 2, 3]);
aggregate([2, 4, 8, 16]);