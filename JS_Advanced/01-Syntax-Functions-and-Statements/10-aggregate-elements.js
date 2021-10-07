function solve(arr) {

    let sum = 0;
    let sumInverse = 0;
    let concat = '';

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        sumInverse += 1/arr[i];
        concat += String(arr[i])
    }

    console.log(sum);
    console.log(sumInverse);
    console.log(concat); 
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);