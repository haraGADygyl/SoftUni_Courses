function daysMonth(month, year) {

    let a = new Date(year, month, 0).getDate();

    console.log(a);
}

daysMonth(1, 2012);
daysMonth(2, 2021);