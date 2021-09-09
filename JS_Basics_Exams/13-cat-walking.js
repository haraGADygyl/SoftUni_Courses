function catWalk(params) {

    let minutes = Number(params[0]);
    let walksCount = Number(params[1]);
    let calories = Number(params[2]);

    let totalCalories = walksCount * minutes * 5;

    if (totalCalories >= calories / 2) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCalories}.`);
    }
}

catWalk(["30", "3", "600"])
catWalk(["15", "2", "500"])
