function stringLength(first, second, third) {

    sumLength = first.length + second.length + third.length;

    averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);
}

stringLength('chocolate', 'ice cream', 'cake')
stringLength('pasta', '5', '22.3')