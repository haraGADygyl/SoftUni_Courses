function towsJson(arr) {

    let result = [];

    let splitted = arr[0].split('|');

    let town = splitted[1].trim();
    let latitude = splitted[2].trim();
    let longitude = splitted[3].trim();

    for (let index = 1; index < arr.length; index++) {
        let obj = {};

        let splittedEntry = arr[index].split('|');

        obj[town] = splittedEntry[1].trim();
        obj[latitude] = Number(Number(splittedEntry[2].trim()).toFixed(2));
        obj[longitude] = Number(Number(splittedEntry[3]).toFixed(2));

        result.push(obj); 
    }

    console.log(JSON.stringify(result));
}

towsJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)