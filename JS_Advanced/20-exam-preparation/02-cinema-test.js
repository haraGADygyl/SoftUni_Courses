let {expect} = require('chai');
let cinema = require('../mochaTests');

describe('cinema', () => {
    describe('showMovies', () => {
        it('works with valid movies', () => {
            expect(cinema.showMovies(['Matrix', 'Matrix2'])).to.equal('Matrix, Matrix2');
        });

        it('does not work with empty array', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
    });

    describe('ticketPrice', () => {
        it('works with valid tickets', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });

        it('does not work with invalid tickets', () => {
            expect(() => cinema.ticketPrice('Test')).to.throw('Invalid projection type.');
        });
    });

    describe('swapSeatsInHall', () => {
        it('works with valid numbers', () => {
            expect(cinema.swapSeatsInHall(1, 20)).to.equal('Successful change of seats in the hall.');
        });

        it('does not work with invalid numbers', () => {
            expect(cinema.swapSeatsInHall(1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1.1, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 1.1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('1', 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, '1')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, '')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('', 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(4, 21)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(21, 4)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-1, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, -1)).to.equal('Unsuccessful change of seats in the hall.');
        });
    });
})