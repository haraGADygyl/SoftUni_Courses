function printArr(arr, step) {

    let result = [];

    for (let i = 0; i < arr.length; i += step) {

        result.push(arr[i]);
    }

    return result
}

console.log(printArr(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));

console.log(printArr(['dsa',
'asd', 
'test', 
'tset'], 
2
));

console.log(printArr(['1', 
'2',
'3', 
'4', 
'5'], 
6
));