function negPos(params) {

    let result = [];

    for (let num of params) {

        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    console.log(result.join('\n'));
}

negPos([7, -2, 8, 9]);
negPos([3, -2, 0, -1]);