let {expect} = require('chai');
let numberOperations = require('../mochaTests');

describe('numberOperations', () => {
    describe('powNumber', () => {
        it('works with valid number', () => {
            expect(numberOperations.powNumber(2)).to.equal(4);
            expect(numberOperations.powNumber(-2)).to.equal(4);
        });
    });

    describe('numberChecker', () => {
        it('works with a number under 100', () => {
            expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(99.1)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('99')).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('99.1')).to.equal('The number is lower than 100!');
        });

        it('works with a number over 100', () => {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(100.1)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker('100')).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker('100.1')).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(101.1)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker('101')).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker('101.1')).to.equal('The number is greater or equal to 100!');
        });

        it('does not work with invalid number', () => {
            expect(() => numberOperations.numberChecker(undefined)).to.throw();
            expect(() => numberOperations.numberChecker(NaN)).to.throw();
        });
    });

    describe('sumArrays', () => {
        it('works with valid number arrays', () => {
            expect(numberOperations.sumArrays([1, 2], [3, 4])).to.eql([4, 6]);
            expect(numberOperations.sumArrays([1.1, 2.1], [3.1, 4.1])).to.eql([4.2, 6.199999999999999]);
            expect(numberOperations.sumArrays([1.1, 2.1, 5], [3.1, 4.1])).to.eql([4.2, 6.199999999999999, 5]);
            expect(numberOperations.sumArrays([1.1], [3.1, 4.1])).to.eql([4.2, 4.1]);
        });
    });
})