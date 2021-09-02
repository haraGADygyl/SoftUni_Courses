function oscars(params) {

    let actorName = params[0];
    let staringPoints = Number(params[1]);
    let juryCount = Number(params[2]);

    let index = 3;
    let points = staringPoints;
    let isNominee = false;

    for (let i = 1; i <= juryCount; i++) {

        let jury = params[index];
        let juryPoints = Number(params[index + 1]);

        points += jury.length * juryPoints / 2;
        index += 2;

        if (points > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
            isNominee = true;
            break;
        }
    }

    if (!isNominee) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - points).toFixed(1)} more!`);
    }
}

oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"])

oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])

