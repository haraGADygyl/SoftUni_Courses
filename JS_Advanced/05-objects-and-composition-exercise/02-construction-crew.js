function crew(obj) {

    if (obj.dizziness) {
        obj.levelOfHydrated += 0.1 * obj.weight * obj.experience;
        obj.dizziness = false;
    }

    return obj;
}

console.log(crew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
));

console.log(crew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}
));
