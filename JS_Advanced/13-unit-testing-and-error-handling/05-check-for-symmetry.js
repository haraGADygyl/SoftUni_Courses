let {expect} = require('chai');
let isSymmetric = require('../sum');

describe('function test', () => {
    it('should return true if strings are equal', () => {
        expect(isSymmetric(['a', 'b', 'a'])).to.equal(true)
    });

    it('should return true if strings are equal', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.equal(true)
    });

    it('should return true if strings are equal', () => {
        expect(isSymmetric([1, 2, 2, '1'])).to.equal(false)
    });

    it('should return true if strings are equal', () => {
        expect(isSymmetric(['abba'])).to.equal(true)
    });

    it('should return false if strings are not equal', () => {
        expect(isSymmetric(['a', 'b'])).to.equal(false)
    });

    it('should return false if argument is not array', () => {
        expect(isSymmetric(1)).to.equal(false)
    });

    it('should return false if argument is not array', () => {
        expect(isSymmetric('hello')).to.equal(false)
    });

    it('should return false if argument is not array', () => {
        expect(isSymmetric({name: 'Ivan'})).to.equal(false)
    });
})