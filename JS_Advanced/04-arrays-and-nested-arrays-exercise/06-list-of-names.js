function listNames(params) {

    params.sort(Intl.Collator().compare)

    for (let i = 0; i < params.length; i++) {
        console.log(`${i+1}.${params[i]}`);
    } 
}

listNames(["John", "Bob", "boob", "Ema"]);