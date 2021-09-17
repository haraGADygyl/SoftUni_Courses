function sumFirst (numbers) {

    let first = Number([...numbers].shift())
    let last = Number([...numbers].pop())

    return first + last;
}

console.log(sumFirst(['20', '30', '40']));;
console.log(sumFirst(['5', '10']));;