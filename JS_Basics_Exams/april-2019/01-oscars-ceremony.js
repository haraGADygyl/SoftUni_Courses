function oscarsCeremony(params) {

    let rent = Number(params[0]);

    let statues = rent * 0.7;
    let food = statues * 0.85;
    let sound = food / 2;

    let total = rent + statues + food + sound;

    console.log(total.toFixed(2));
    
}

oscarsCeremony(["3500"])