function solve(...params) {

    let number = Number(params[0]);

    for (let index = 0; index < params.length; index++) {
        
        switch (params[index]) {
            case 'chop': number /= 2; console.log(number); break;
            case 'dice': number = Math.sqrt(number); console.log(number); break;
            case 'spice': number++; console.log(number); break;
            case 'bake': number *= 3; console.log(number); break;
            case 'fillet': number *= 0.8; console.log(number);
        }
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('-'.repeat(20));
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
