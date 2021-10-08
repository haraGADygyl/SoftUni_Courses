function solve(arr) {

    let result = [];
    let number = 0;

    for (const command of arr) {
        number++;

        if (command == 'add') {
            result.push(number);
        } else {
            result.pop();
        }
    }

    if (result.length > 0) {
        return result.join('\n')
    } else {
        return 'Empty'
    }
}

console.log(solve(['add',
    'add',
    'add',
    'add']
));

console.log('-'.repeat(10));

console.log(solve(['add',
    'add',
    'remove',
    'add',
    'add']
));

console.log('-'.repeat(10));

console.log(solve(['remove',
    'remove',
    'remove']
));