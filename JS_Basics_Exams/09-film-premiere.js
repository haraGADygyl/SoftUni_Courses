function filmPremiere(params) {

    let movieName = params[0];
    let moviePacket = params[1];
    let ticketsCount = Number(params[2]);

    let ticketPrice = 0;

    switch (movieName) {

        case 'John Wick':

            switch (moviePacket) {
                case 'Drink':
                    ticketPrice = 12;
                    break;
                case 'Popcorn':
                    ticketPrice = 15;
                    break;
                case 'Menu':
                    ticketPrice = 19;
                    break;
            }
            break;

        case 'Star Wars':

            switch (moviePacket) {
                case 'Drink':
                    ticketPrice = 18;
                    break;
                case 'Popcorn':
                    ticketPrice = 25;
                    break;
                case 'Menu':
                    ticketPrice = 30;
                    break;
            }
            break;

        case 'Jumanji':

            switch (moviePacket) {
                case 'Drink':
                    ticketPrice = 9;
                    break;
                case 'Popcorn':
                    ticketPrice = 11;
                    break;
                case 'Menu':
                    ticketPrice = 14;
                    break;
            }
            break;
    }

    let totalTicketPrice = ticketPrice * ticketsCount;

    if (movieName === 'Star Wars' && ticketsCount >= 4) {
        totalTicketPrice *= 0.7;
    }

    if (movieName === 'Jumanji' && ticketsCount === 2) {
        totalTicketPrice *= 0.85;
    }

    console.log(`Your bill is ${totalTicketPrice.toFixed(2)} leva.`);
}

filmPremiere(["John Wick", "Drink", "6"])

filmPremiere(["Star Wars", "Popcorn", "4"])

filmPremiere(["Jumanji", "Menu", "2"])