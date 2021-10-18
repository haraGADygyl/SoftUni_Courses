function solve(ticketsArr, sortingCriteria) {
    let results = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        compareTo(other, criteria) {
            if (typeof this[criteria] === 'string') {
                return this[criteria].localeCompare(other[criteria]);
            } else {
                return this[criteria] - other[criteria];
            }
        }
    }

    for (let i = 0; i < ticketsArr.length; i++) {
        let [destination, price, status] = ticketsArr[i].split('|');
        price = Number(price);

        let ticket = new Ticket(destination, price, status);
        results.push(ticket)
    }

    results.sort((a, b) => a.compareTo(b, sortingCriteria));

    return results;
}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
))