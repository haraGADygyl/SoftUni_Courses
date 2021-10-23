let {expect} = require('chai');
let library = require('../mochaTests');

describe('library', () => {
    describe('calcPriceOfBook', () => {
        it('works with valid parameters', () => {
            expect(library.calcPriceOfBook('test book', 1999)).to.equal('Price of test book is 20.00');
        });

        it('works with valid parameters, year is le 1980', () => {
            expect(library.calcPriceOfBook('test book', 1980)).to.equal('Price of test book is 10.00');
            expect(library.calcPriceOfBook('test book', 1979)).to.equal('Price of test book is 10.00');
        });


        it('does not work with invalid parameters', () => {
            expect(() => library.calcPriceOfBook(1, 1999)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook([], 1999)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook({}, 1999)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(undefined, 1999)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(null, 1999)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('test book', 1999.1)).to.throw('Invalid input');
        });


    });

    describe('findBook', () => {
        it('works with valid parameters, book found', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy')).to.equal('We found the book you want.');
        });

        it('works with valid parameters, book not found', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'test')).to.equal('The book you are looking for is not here!');
        });

        it('does not work with invalid parameters', () => {
            expect(() => library.findBook([], 'Troy')).to.throw('No books currently available');
        });


    });

    describe('arrangeTheBooks', () => {
        it('works with valid parameters', () => {
            expect(library.arrangeTheBooks(0)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });

        it('does not work with invalid parameters', () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });


        it('does not work with invalid parameters', () => {
            expect(() => library.arrangeTheBooks(1.1)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
        });


    });


});