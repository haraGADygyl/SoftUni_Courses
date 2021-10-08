function solve(arr, step) {

    let rotations = step % arr.length;

    for (let index = 0; index < rotations; index++) {
        arr.unshift(arr.pop())        
    }

    return arr.join(' ')
}

console.log(solve(['1',
    '2',
    '3',
    '4'],
    2
));

console.log(solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
));
