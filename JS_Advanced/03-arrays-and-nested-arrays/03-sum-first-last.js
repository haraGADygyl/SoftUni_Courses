function solve(arr) {
    let sum = 0;

    sum += Number(arr.pop()) + Number(arr.shift()); 

    console.log(sum);
}

solve(['20', '30', '40']);
solve(['5', '10']);
