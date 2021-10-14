let {expect} = require('chai');
let sum = require('../sum');

describe('Check for correct sum', () => {
    it('should return 7', () => {
        expect(sum([1, 2, 3])).to.equal(6)
    });

    it('should return 10', () => {
        expect(sum([1, 9])).to.equal(10)
    });

    it('should return 11', () => {
        expect(sum([1, 2, 3, 5])).to.equal(11)
    });
});