function diagonalSum(params) {

    let matrixLength = params.length;

    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    let end_index = matrixLength-1;

    for (let i = 0; i < matrixLength; i++) {
        firstDiagonalSum += params[i][i];

        secondDiagonalSum += params[i][end_index];
        end_index--;
    }

    console.log(firstDiagonalSum, secondDiagonalSum);
}

diagonalSum([[20, 40],
            [10, 60]]
);

diagonalSum([[3, 5, 17],
            [-1, 7, 14],
            [1, -8, 89]]
)
