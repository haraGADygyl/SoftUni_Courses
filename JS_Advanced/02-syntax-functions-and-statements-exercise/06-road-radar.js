function solve(speed, area) {

    let motorway = 130;
    let interstate = 90;
    let city = 50;
    let residential = 20;

    let difference = 0;
    let speedLimit = 0;
    let status = '';

    switch (area) {
        case 'motorway': difference = speed - motorway; speedLimit = motorway; break;
        case 'interstate': difference = speed - interstate; speedLimit = interstate; break;
        case 'city': difference = speed - city; speedLimit = city; break;
        case 'residential': difference = speed - residential; speedLimit = residential; break;
    }

    switch (true) {
        case difference <= 20: status = 'speeding'; break;
        case difference <= 40: status = 'excessive speeding'; break;
        case difference > 40: status = 'reckless driving'; break;
    }

    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');
