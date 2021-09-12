function foodForPets(params) {

    let days = Number(params[0]);
    let totalFood = Number(params[1]);

    let day = 0;
    let biscuits = 0;
    let foodEaten = 0;
    let eatenDog = 0;
    let eatenCat = 0;


    for (let i = 2; i <= days * 2; i += 2) {

        day += 1;

        let dogFood = Number(params[i]);
        let catFood = Number(params[i + 1]);

        eatenDog += dogFood;
        eatenCat += catFood;

        let foodToday = dogFood + catFood;
        foodEaten += foodToday;

        if (day % 3 === 0) {
            biscuits += foodToday * 0.1;

        }
    }

    let percentFoodEaten = foodEaten / totalFood * 100;
    let percentEatenDog = eatenDog / foodEaten * 100;
    let percentEatenCat = eatenCat / foodEaten * 100;

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${percentFoodEaten.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentEatenDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentEatenCat.toFixed(2)}% eaten from the cat.`);

}

foodForPets(["3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"])
foodForPets(["3",
    "500",
    "100",
    "30",
    "110",
    "25",
    "120",
    "35"])
