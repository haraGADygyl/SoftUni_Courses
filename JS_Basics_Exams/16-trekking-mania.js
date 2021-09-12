function trekking(params) {

    let groupsCount = Number(params[0]);

    let totalPeople = 0;
    
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i <= groupsCount; i++) {

        let peopleCount = Number(params[i]);
        totalPeople += peopleCount;

        switch (true) {
            case peopleCount <= 5:
                musala += peopleCount;
                break;
            case peopleCount <= 12:
                monblan += peopleCount;
                break;
            case peopleCount <= 25:
                kilimandjaro += peopleCount;
                break;
            case peopleCount <= 40:
                k2 += peopleCount;
                break;
            case peopleCount > 40:
                everest += peopleCount;
                break;
        }
    }

    console.log(`${(musala / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(monblan / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(kilimandjaro / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(k2 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(everest / totalPeople * 100).toFixed(2)}%`);
}

trekking(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
