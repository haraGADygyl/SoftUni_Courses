function piePiece(pieArr, firstFlavor, secondFlavor) {

    let start = pieArr.indexOf(firstFlavor);
    let end = pieArr.indexOf(secondFlavor);

    return pieArr.slice(start, end + 1)
}

console.log(piePiece(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));

console.log(piePiece(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
));