function fruitsCalc(fruit, grams, price) {

    let fruitKg = grams / 1000;

    console.log(`I need $${(price * fruitKg).toFixed(2)} to buy ${fruitKg.toFixed(2)} kilograms ${fruit}.`);  
}

fruitsCalc('orange', 2500, 1.80)
fruitsCalc('apple', 1563, 2.35)