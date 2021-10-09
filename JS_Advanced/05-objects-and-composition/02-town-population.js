function solve(arr) {

    let result = {};

    for (let i of arr) {
        let current = i.split(' <-> ');
        let townName = current[0];
        let townPopulation = Number(current[1]);

        if (result[townName] == undefined) {
           result[townName] = townPopulation; 
        } else {
            result[townName] += townPopulation;
        }  
    }
    
    let resultArr = [];
    for (let key in result) {
        resultArr.push(`${key} : ${result[key]}`);
    }

    return resultArr.join('\n');
};

console.log(solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
));

console.log(solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
));