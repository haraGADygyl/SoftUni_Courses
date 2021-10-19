class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {}; // {'musaka': {products: 'potatoes', price: '10'}}
        this.stockProducts = {}; // {'potatoes': 10}
        this.history = [];
    }

    loadProducts(products) {
        for (const product of products) {
            let [productName, productQuantity, productTotalPrice] = product.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if (productTotalPrice <= this.budgetMoney) {
                if (!this.stockProducts[productName]) {
                    this.stockProducts[productName] = 0;
                }

                this.stockProducts[productName] += productQuantity;
                this.budgetMoney -= productTotalPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);

            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }
        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu[meal]) {
            this.menu[meal] = {
                products: {},
                price: price,
            }

            neededProducts.forEach((el) => {
                let [name, quantity] = el.split(' ');
                quantity = Number(quantity);
                this.menu[meal].products[name] = quantity;
            })

            let mealCount = Object.keys(this.menu).length;
            if (mealCount === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${mealCount} meals in the menu, other ideas?`
            }

        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }


    }

    showTheMenu() {
        let result = [];

        if (Object.keys(this.menu).length === 0) {
            return `Our menu is not ready yet, please come later...`;
        } else {
            for (const menuKey in this.menu) {
                result.push(`${menuKey} - $ ${this.menu[menuKey].price}`);
            }
        }

        return result.join('\n')
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            let neededProducts = {};

            for (const productsKey in this.menu[meal].products) {
                if (!this.stockProducts[productsKey] || this.stockProducts[productsKey] < this.menu[meal].products[productsKey]) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
                } else {
                    neededProducts[productsKey] = this.menu[meal].products[productsKey];
                }
            }

            for (const neededProduct in neededProducts) {
                this.stockProducts[neededProduct] -= neededProducts[neededProduct];
            }

            this.budgetMoney += this.menu[meal].price;
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
        }
    }
}


// let kitchen1 = new Restaurant(1000);
// console.log(kitchen1.loadProducts(['Banana 10 5',
//     'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10',
//     'Yogurt 500 1500', 'Honey 5 50']));
//
// // let kitchen2 = new Restaurant(1000);
// console.log(kitchen1.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen1.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
//
// // let kitchen3 = new Restaurant(1000);
// console.log(kitchen1.showTheMenu());

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
