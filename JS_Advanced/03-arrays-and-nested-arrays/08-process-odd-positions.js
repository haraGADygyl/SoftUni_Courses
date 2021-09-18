function oddPositions(params) {

    // let result = [];

    // for (let i = 0; i < params.length; i++) {

    //     if (i % 2 != 0) {
    //         result.push(params[i] * 2);
    //     }
    // }

    // return result.reverse();

    let result = params.filter((v, i) => i % 2 == 1);
    result = result.map(v => v * 2);
    result.reverse()

    return result
}

console.log(oddPositions([10, 15, 20, 25]));
console.log(oddPositions([3, 0, 10, 4, 7, 3]));