let {expect} = require('chai');
let lookupChar = require('../sum');

describe('lookupChar', () => {
    it('should return undefined if arguments are of incorrect type', () => {
        expect(lookupChar(1, "1")).to.equal(undefined);
        expect(lookupChar(1, 1)).to.equal(undefined);
        expect(lookupChar("1", '1')).to.equal(undefined);
        expect(lookupChar("1", 0.1)).to.equal(undefined);
        expect(lookupChar("1", null)).to.equal(undefined);
        expect(lookupChar("1", undefined)).to.equal(undefined);
        expect(lookupChar(undefined, 1)).to.equal(undefined);
    });
    it('should return incorrect index if index is invalid', () => {
        expect(lookupChar('test', -1)).to.equal('Incorrect index');
        expect(lookupChar('test', 4)).to.equal('Incorrect index');
        expect(lookupChar('', 0)).to.equal('Incorrect index');
        expect(lookupChar('', -1)).to.equal('Incorrect index');
    });
    it('should return the correct index', () => {
        expect(lookupChar('test', 0)).to.equal('t');
        expect(lookupChar('testy', 4)).to.equal('y');
    })
})