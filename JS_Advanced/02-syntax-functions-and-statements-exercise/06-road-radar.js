function radar(speed, area) {

    let motorwaySpeed = 130;
    let interstateSpeed = 90;
    let citySpeed = 50;
    let residentialSpeed = 20;

    let currentSpeedLimit = 0;

    switch (area) {
        case 'motorway': currentSpeedLimit = motorwaySpeed; break;
        case 'interstate': currentSpeedLimit = interstateSpeed; break;
        case 'city': currentSpeedLimit = citySpeed; break;
        case 'residential': currentSpeedLimit = residentialSpeed;
    }

    let difference = speed - currentSpeedLimit;

    if (difference > 0) {
        let status = ''

        switch (true) {
            case difference <= 20: status = 'speeding'; break;
            case difference <= 40: status = 'excessive speeding'; break;
            case difference > 40: status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${currentSpeedLimit} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${currentSpeedLimit} zone`);
    }
}

radar(40, 'city');
radar(21, 'residential');
radar(120, 'interstate');
radar(200, 'motorway');