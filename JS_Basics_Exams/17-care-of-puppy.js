function carePuppy(params) {

    let food = Number(params[0]) * 1000;

    let foodEaten = 0;

    let i = 1;
    while (params[i] !== 'Adopted') {

        foodEaten += Number(params[i]);
        i++;
    }

    let diff = Math.abs(food - foodEaten)

    if (foodEaten <= food) {
        console.log(`Food is enough! Leftovers: ${diff} grams.`);
    } else {
        console.log(`Food is not enough. You need ${diff} grams more.`);
    }
}

carePuppy(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"])

carePuppy(["3",
    "1000",
    "1000",
    "1000",
    "Adopted"])

carePuppy(["2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"])
