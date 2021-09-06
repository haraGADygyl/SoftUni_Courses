function skeleton(params) {

    let minutes = Number(params[0]);
    let seconds = Number(params[1]);
    let length = Number(params[2]);
    let secondsPer100Meters = Number(params[3]);

    let recordSeconds = minutes * 60 + seconds;

    let time = length / 100 * secondsPer100Meters;
    time -= (length / 120) * 2.5;

    let diff = Math.abs(time - recordSeconds);

    if (time <= recordSeconds) {
        console.log('Marin Bangiev won an Olympic quota!');
        console.log(`His time is ${time.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
    }
}

skeleton(["2",
    "12",
    "1200",
    "10"])

skeleton(["1",
    "20",
    "1546",
    "12"])
