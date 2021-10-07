function solve(a, b) {
    if (!b) {
        return a;
    }
    return solve(b, a % b)
}

console.log(solve(15, 5));
console.log(solve(2154, 458));
