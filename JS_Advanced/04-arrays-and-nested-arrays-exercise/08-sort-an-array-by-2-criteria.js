function sortBy2Criteria(params) {

    let result = params.sort((a, b) => {

        if (a.length > b.length) {
            return 1
        } else if (a.length == b.length) {
            return a.localeCompare(b);
        } else {
            return -1
        }
    })

    console.log(result.join('\n'));
}

sortBy2Criteria(['alpha',
    'beta',
    'gamma']
);

sortBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']

);

sortBy2Criteria(['test',
    'Deny',
    'omen',
    'Default']
);