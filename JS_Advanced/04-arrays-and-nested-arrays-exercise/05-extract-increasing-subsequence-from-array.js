// Version 1
// function increasingSubsequence(params) {

//     let result = [Number(params[0])];

//     for (let i = 1; i < params.length; i++) {

//         if (Number(params[i] >= Number(result[result.length - 1]))) {

//             result.push(Number(params[i]));
//         }
//     }

//     return result;
// }


// Version 2
function increasingSubsequence(params) {

    let biggest = Number.MIN_SAFE_INTEGER;

    const result = params.filter((el) => {
        if (el >= biggest) {
            biggest = el;
            return true;
        }
        return false;
    });

    return result;
}

console.log(increasingSubsequence([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));

console.log(increasingSubsequence([1,
    2,
    3,
    4]
));

console.log(increasingSubsequence([20,
    3,
    2,
    15,
    6,
    1]
));