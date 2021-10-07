function solve(text) {

    let result = [];

    for (const word of text.match(/\w+/g)) {
        result.push(word.toUpperCase())
    }

    console.log(result.join(', '));
}

solve('Hi, how are you?');
solve('hello');