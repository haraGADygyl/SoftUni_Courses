let {expect} = require('chai');
let isOddOrEven = require('../sum');

describe('isOddOrEven', () => {
    it('should return undefined if parameter is not a string', () => {
        expect(isOddOrEven(1)).to.equal(undefined);
        expect(isOddOrEven([1, 2])).to.equal(undefined);
    })
    it('should return even if string is even', () => {
        expect(isOddOrEven('even')).to.equal('even');
        expect(isOddOrEven('lq')).to.equal('even');
        expect(isOddOrEven('11')).to.equal('even');
    })
    it('should return odd if string is odd', () => {
        expect(isOddOrEven('odd')).to.equal('odd');
        expect(isOddOrEven('1')).to.equal('odd');
    })
})