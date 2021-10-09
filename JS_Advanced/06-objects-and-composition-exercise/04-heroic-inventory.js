function solve(arr) {

    let heroObj = [];

    arr.forEach(element => {
        let [name, level, items] = element.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        heroObj.push({
            name,
            level,
            items,
        })
    });
    return JSON.stringify(heroObj);
}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));

console.log(solve(['Jake / 1000']));
