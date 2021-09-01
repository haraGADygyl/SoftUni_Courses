function snookerTickets(params) {

    let stage = params[0];
    let ticketType = params[1];
    let ticketsCount = Number([params[2]]);
    let photo = params[3];

    let price = 0;

    if (stage === 'Quarter final') {

        if (ticketType === 'Standard') {
            price = 55.5;
        } else if (ticketType === 'Premium') {
            price = 105.2;
        } else if (ticketType === 'VIP') {
            price = 118.9;
        }

    } else if (stage === 'Semi final') {

        if (ticketType === 'Standard') {
            price = 75.88;
        } else if (ticketType === 'Premium') {
            price = 125.22;
        } else if (ticketType === 'VIP') {
            price = 300.4;
        }

    } else if (stage === 'Final') {

        if (ticketType === 'Standard') {
            price = 110.1;
        } else if (ticketType === 'Premium') {
            price = 160.66;
        } else if (ticketType === 'VIP') {
            price = 400;
        }
    }

    let totalPrice = ticketsCount * price;

    if (totalPrice > 4000) {
        totalPrice *= 0.75;
        console.log(totalPrice.toFixed(2));
        return;

    } else if (totalPrice > 2500) {
        totalPrice *= 0.9;
    }

    if (photo === 'Y') {
        totalPrice += ticketsCount * 40;
    }

    console.log(totalPrice.toFixed(2));
}

snookerTickets(["Final", "Premium", "25", "Y"])
snookerTickets(["Semi final", "VIP", "9", "Y"])
snookerTickets(["Quarter final", "Standard", "11", "N"])