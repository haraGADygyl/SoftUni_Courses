function biggerHalf(params) {

    params.sort((a, b) => a - b)

    let middle = Number(params.length / 2);

    return params.slice(middle)
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));