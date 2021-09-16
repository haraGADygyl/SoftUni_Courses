function timeToWalk(steps, stepsLength, speed) {

    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    let distance = steps * stepsLength;
    let rest = parseInt(distance / 500) * 60;
    let speedM = speed / 3.6;
    let result = distance / speedM + rest

    hours = parseInt(result / 3600)
    minutes = parseInt(result / 60)
    seconds = Math.round(result % 60)

    console.log(String(hours).padStart(2, '0') + ':'
        + String(minutes).padStart(2, '0') + ':'
        + String(seconds).padStart(2, '0'));
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);