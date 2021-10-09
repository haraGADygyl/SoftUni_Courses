function towsJson(arr) {

    let result = [];

    let [, town, latitude, longitude, ] = arr[0].split('|');
    town = town.trim();
    latitude = latitude.trim();
    longitude = longitude.trim();

    for (let index = 1; index < arr.length; index++) {
        let myObj = {};
        
        let [, townSplit, latitudeSplit, longitudeSplit, ] = arr[index].split('|');
        townSplit = townSplit.trim();
        latitudeSplit = latitudeSplit.trim();
        longitudeSplit = longitudeSplit.trim();

        myObj[town] = townSplit;
        myObj[latitude] = Number(Number(latitudeSplit).toFixed(2));
        myObj[longitude] = Number(Number(longitudeSplit).toFixed(2));

        result.push(myObj);
    }

    return JSON.stringify(result)
}

console.log(towsJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
));