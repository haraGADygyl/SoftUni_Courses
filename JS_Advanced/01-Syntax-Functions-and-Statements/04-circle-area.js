function circleArea(radius) {

    let checkType = typeof(radius);

    if (checkType == 'number') {
        let area = Math.PI * radius ** 2
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${checkType}.`);
    } 
}

circleArea(5)
circleArea('name')