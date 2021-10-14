function createDeck(cards) {
    let result = [];

    for (let card of cards) {
        let face = card.slice(0, -1);
        let suit = card.slice(-1);

        try {
            result.push(createCard(face, suit));
        } catch (e) {
            console.log('Invalid card: ' + card);
            return;
        }
    }

    console.log(result.join(' '))

    function createCard(cardFace, cardSuit) {
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
        };
    }
}

createDeck(['AS', '10D', 'KH', '2C']);
createDeck(['5S', '3D', 'QD', '1C']);
