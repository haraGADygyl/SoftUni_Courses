function mountainRun(params) {

    let recordSeconds = Number(params[0]);
    let distanceMeters = Number(params[1]);
    let timeOneMeter = Number(params[2]);

    let time = distanceMeters * timeOneMeter;
    let delay = Math.floor(distanceMeters / 50) * 30;
    let totalTime = time + delay;

    if (totalTime < recordSeconds) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(totalTime - recordSeconds).toFixed(2)} seconds slower.`);
    }
}

mountainRun(["10164", "1400", "25"])
mountainRun(["5554.36", "1340", "3.23"])
mountainRun(["1377", "389", "3"])