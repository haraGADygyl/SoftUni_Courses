function solve(cardFace, cardSuit) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    let suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    }
    if (faces.includes(cardFace) === false) {
        throw new Error('Invalid face!!!!');
    }
    if (Object.keys(suits).includes(cardSuit) === false) {
        throw new Error('Invalid suit!!!');
    }

    return {
        face: cardFace,
        suit: suits[cardSuit],
        toString() {
            return this.face + this.suit
        }
    }
}

console.log(solve('A', 'S').toString());
console.log(solve('10', 'H').toString());
// console.log(solve('1', 'C').toString());
// console.log(solve('2', 'T').toString());
