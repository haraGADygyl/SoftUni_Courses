function fitnessCard(params) {

    let money = Number(params[0]);
    let gender = params[1];
    let age = Number(params[2]);
    let sport = params[3];

    let price = 0

    switch (gender) {
        case 'm':
            switch (sport) {
                case 'Gym':
                    price = 42;
                    break;
                case 'Boxing':
                    price = 41;
                    break;
                case 'Yoga':
                    price = 45;
                    break;
                case 'Zumba':
                    price = 34;
                    break;
                case 'Dances':
                    price = 51;
                    break;
                case 'Pilates':
                    price = 39;
                    break;
            }
            break;
        case 'f':
            switch (sport) {
                case 'Gym':
                    price = 35;
                    break;
                case 'Boxing':
                    price = 37;
                    break;
                case 'Yoga':
                    price = 42;
                    break;
                case 'Zumba':
                    price = 31;
                    break;
                case 'Dances':
                    price = 53;
                    break;
                case 'Pilates':
                    price = 37;
                    break;
            }
            break;
    }

    if (age <= 19) {
        price *= 0.8;
    }

    if (price <= money) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${(price - money).toFixed(2)} more.`);
    }
}

fitnessCard(["50",
    "m",
    "23",
    "Gym"])

fitnessCard(["20",
    "f",
    "15",
    "Yoga"])

fitnessCard(["10",
    "m",
    "50",
    "Pilates"])
