function smallestTwo(params) {

    let smallest = params.sort((a, b) => a - b)

    console.log(smallest.slice(0, 2).join(' '));  
}

smallestTwo([30, 15, 50, 5]);
smallestTwo([3, 0, 10, 4, 7, 3]);