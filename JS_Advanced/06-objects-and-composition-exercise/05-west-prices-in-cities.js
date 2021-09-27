function lowestPrice(arr) {

    let result = {};

    arr.forEach(element => {
        let [town, product, price] = element.split(' | ');
        price = Number(price);

        if (!result[product]) {
            result[product] = {};
        }

        result[product][town] = price;

    });

    for (let prod in result) {
        let sortedItems = Object.entries(result[prod]).sort((a,b) => a[1] - b[1]);
        console.log(`${prod} -> ${sortedItems[0][1]} (${sortedItems[0][0]})`);
    } 
}

lowestPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);