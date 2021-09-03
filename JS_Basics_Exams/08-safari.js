function safari(params) {

    let budget = Number(params[0]);
    let litersFuel = Number(params[1]);
    let day = params[2];

    let fuelPrice = 2.1;
    let guidePrice = 100;

    let money = litersFuel * fuelPrice + guidePrice;

    if (day === 'Saturday') {
        money *= 0.9;
    } else {
        money *= 0.8;
    }

    let diff = Math.abs(budget - money)

    if (money < budget) {
        console.log(`Safari time! Money left: ${diff.toFixed(2)} lv. `);
    } else {
        console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`);
    }
    
}

safari(["1000",
"10",
"Sunday"])

safari(["120",
"30",
"Saturday"])
