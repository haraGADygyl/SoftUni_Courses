function addRemove(params) {

    let result = []
    let start = 1;

    for (let i = 0; i < params.length; i++) {

        if (params[i] === 'add') {

            result.push(start);

        } else if (params[i] === 'remove') {

            result.pop();
        }

        start++
    }

    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

addRemove(['add',
    'add',
    'add',
    'add']
);

addRemove(['add',
    'add',
    'remove',
    'add',
    'add']
);

addRemove(['remove',
    'remove',
    'remove']
);