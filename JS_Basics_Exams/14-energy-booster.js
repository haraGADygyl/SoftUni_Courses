function energyBooster(params) {

    let fruit = params[0];
    let size = params[1];
    let setsCount = Number(params[2]);

    let money = 0;

    switch (fruit) {
        case 'Watermelon':
            switch (size) {
                case 'small':
                    money = 56 * 2;
                    break;
                case 'big':
                    money = 28.7 * 5;
                    break;
            }
            break;
        case 'Mango':
            switch (size) {
                case 'small':
                    money = 36.66 * 2;
                    break;
                case 'big':
                    money = 19.6 * 5;
                    break;
            }
            break;
        case 'Pineapple':
            switch (size) {
                case 'small':
                    money = 42.1 * 2;
                    break;
                case 'big':
                    money = 24.8 * 5;
                    break;
            }
            break;
        case 'Raspberry':
            switch (size) {
                case 'small':
                    money = 20 * 2;
                    break;
                case 'big':
                    money = 15.2 * 5;
                    break;
            }
            break;
    }

    money *= setsCount

    if (money >= 400 && money <= 1000) {
        money *= 0.85;
    }

    if (money > 1000) {
        money *= 0.5;
    }

    console.log(`${money.toFixed(2)} lv.`);
}

energyBooster(["Watermelon",
    "big",
    "4"])

energyBooster(["Pineapple",
    "small",
    "1"])
