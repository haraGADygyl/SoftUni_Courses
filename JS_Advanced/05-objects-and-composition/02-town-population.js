function townPopulation(towns) {

    let result = {};

    for (let townInfo of towns) {

        let data = townInfo.split(' <-> ');
        let town = data[0];
        let population = Number(data[1]);

        if (result[town] == undefined) {
            result[town] = population;
        } else {
            result[town] += population;
        }
    }

    for (let townsObj in result) {
        console.log(`${townsObj} : ${result[townsObj]}`);
    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)