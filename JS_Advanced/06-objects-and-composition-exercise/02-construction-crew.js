function solve(person) {

    if (person.dizziness) {
        
        person['levelOfHydrated'] += person.weight * person.experience * 0.1;
        person['dizziness'] = false;
    }
    return person; 
}

console.log(solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
));

console.log(solve({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}
));

console.log(solve({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}
));