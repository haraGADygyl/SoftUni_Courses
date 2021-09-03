function renovation(params) {

    let wallHeight = Number(params[0]);
    let wallWidth = Number(params[1]);
    let percentage = Number(params[2]);

    let totalArea = wallHeight * wallWidth * 4;
    totalArea -= totalArea * (percentage / 100);


    let index = 3;
    let command = params[index++];

    while (command !== 'Tired!') {

        totalArea -= Number(command);

        if (totalArea <= 0) {
            break;
        }
        command = params[index++];
    }

    if (totalArea < 0) {
        console.log(`All walls are painted and you have ${Math.ceil(Math.abs(totalArea))} l paint left!`);
    } else if (totalArea === 0) {
        console.log('All walls are painted! Great job, Pesho!');
    } else {
        console.log(`${Math.ceil(totalArea)} quadratic m left.`);
    }
}

renovation(["3",
    "5",
    "10",
    "2",
    "3",
    "4",
    "Tired!"])

renovation(["2",
    "3",
    "25",
    "6",
    "7",
    "8"])