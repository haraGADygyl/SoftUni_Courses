function printObject(obj) {
    for (const objElement of Object.entries(obj)) {
        console.log(`${objElement[0]} -> ${objElement[1]}`)
    }
}



let obj = {
    name: 'Jorko',
    age: 44,
    lastName: 'Jorkov'
}

printObject(obj)