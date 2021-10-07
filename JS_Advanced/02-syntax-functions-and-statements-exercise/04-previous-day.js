function solve(year, month, day) {

    let result = new Date(`${year}-${month}-${day}`);
    result.setDate(day - 1);

    console.log(`${result.getFullYear()}-${result.getMonth()+1}-${result.getDate()}`);
}

solve(2016, 9, 30);
solve(2016, 10, 1);
