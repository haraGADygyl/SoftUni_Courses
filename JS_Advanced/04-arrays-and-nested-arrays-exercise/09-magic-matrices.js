function magicMatrices(params) {

    let result = new Set()

    for (let i = 0; i < params.length; i++) {

        let rowSum = 0;
        let colSum = 0;

        for (let j = 0; j < params.length; j++) {
            rowSum += params[i][j];
            colSum += params[j][i];
        }

        result.add(rowSum);
        result.add(colSum);
    }

    if (result.size === 1) {
        console.log('true');
    } else {
        console.log('false');
    }
}

magicMatrices([[4, 5, 6],
                [6, 5, 4],
                [5, 5, 5]]
   );

magicMatrices([[11, 32, 45],
                [21, 0, 1],
                [21, 1, 1]]
   );

magicMatrices([[1, 0, 0],
                [0, 0, 1],
                [0, 1, 0]]
   );