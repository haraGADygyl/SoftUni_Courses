function solve(area, vol, input) {

    let cubes = JSON.parse(input);
    let result = [];

    for (let cube of cubes) {
        let cubeArea = area.apply(cube);
        let cubeVol = vol.apply(cube);

        result.push({
            area: cubeArea,
            volume: cubeVol,
        });
    }

    return result;
}

let data = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`;


console.log(solve(area, vol, data));

function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}

