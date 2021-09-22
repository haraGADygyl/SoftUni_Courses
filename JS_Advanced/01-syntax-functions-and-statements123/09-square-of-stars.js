function squareStars(number) {

    if (number == undefined) {
        console.log('* * * * *' + '\n' +
                    '* * * * *' + '\n' +
                    '* * * * *' + '\n' +
                    '* * * * *' + '\n' +
                    '* * * * *');
    }

    for (let i = 0; i < number; i++) {
        console.log('* '.repeat(number));
    }
}

squareStars(1);
squareStars(2);
squareStars(5);
squareStars();