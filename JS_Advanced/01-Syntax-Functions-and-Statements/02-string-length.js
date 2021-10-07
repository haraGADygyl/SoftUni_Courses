function solve(first, second, third) {

    let sum = first.length + second.length + third.length;
    let avg = sum / 3;

    console.log(sum);
    console.log(Math.trunc(avg));
}

solve('chocolate', 'ice cream', 'cake')