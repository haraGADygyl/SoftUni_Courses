function solve(arr) {

    arr.sort((a, b) => a.localeCompare(b));
    let result = []

    for (let index = 0; index < arr.length; index++) {
        result.push(`${index+1}.${arr[index]}`)
    }

    return result.join('\n');
}

console.log(solve(["John", "Bob", "Christina", "Ema"]));
