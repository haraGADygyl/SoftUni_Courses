function solve(obj) {

    let objectCar = {};

    objectCar['model'] = obj['model']

    if (obj['power'] <= 90) {
        objectCar['engine'] = {
            power: 90,
            volume: 1800,
        }
    } else if (obj['power'] <= 120) {
        objectCar['engine'] = {
            power: 120,
            volume: 2400,
        }
    } else {
        objectCar['engine'] = {
            power: 200,
            volume: 3500,
        }
    }

    objectCar['carriage'] = {type: obj['carriage'], color: obj['color']};

    if (obj['wheelsize'] % 2 == 0) {
        objectCar['wheels'] = Array(4).fill(obj['wheelsize'] - 1, 0, 4);
    } else {
        objectCar['wheels'] = Array(4).fill(obj['wheelsize'], 0, 4);
    }
    return objectCar;
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));

console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));
